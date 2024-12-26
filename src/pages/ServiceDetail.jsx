import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Helmet } from "react-helmet-async";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    serviceImage,
    serviceTitle,
    companyName,
    website,
    description,
    price,
  } = service;
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);

  // Fetch reviews for the service
  useEffect(() => {
    fetch(`https://assignment-11-server-nine-peach.vercel.app/reviews?serviceId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setTotalReviews(data.length);
      })
      .catch((error) => toast.error("Failed to load reviews"));
  }, [id]);

  const AddReview = (e) => {
    e.preventDefault();
    if (!reviewText || rating === 0) {
      toast.error("Please provide both a review and a rating.");
      return;
    }

    const review = {
      serviceId: id,
      serviceTitle,
      userName: user?.displayName || "Anonymous",
      userPhoto: user?.photoURL || "",
      userEmail: user?.email,
      reviewText,
      rating,
      postedDate: new Date().toISOString().split("T")[0],
    };

    fetch(`https://assignment-11-server-nine-peach.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        setRating(0);
        setReviewText("");
        setReviews((prevReviews) => [...prevReviews, data]);
        setTotalReviews((prevTotal) => prevTotal + 1);
        toast.success("Review added successfully!");
      })
      .catch((error) => toast.error("Failed to submit review"));
  };
  return (
    <section className="py-10">
      <Helmet>
        <title>Details-Service Review</title>
      </Helmet>
      <div className="max-w-5xl text-black mx-auto  p-6  shadow-lg rounded-lg">
        <div className=" flex flex-col md:flex-row gap-8">
          {/* photo */}
          <div className="w-full h-[300px] md:w-2/5">
            <img
              src={serviceImage}
              alt={serviceTitle}
              className="w-full h-full object-cover  rounded-lg shadow-md"
            />
          </div>

          {/*  Details Section */}
          <div className="w-full md:w-3/5 flex flex-col items-start justify-between">
            {/* Title and Meta Info */}
            <div className="mb-2">
              <h1 className="text-[40px] text-black font-bold ">
                {serviceTitle}
              </h1>
              <h2 className="text-lg text-[#116948] font-medium ">
                Reviews ({totalReviews})
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-700">
                <span className="font-bold text-black text-xl">
                  Company Name:
                </span>{" "}
                {companyName}
              </p>
              <p className="text-lg text-gray-700 my-2 md:mt-3">
                <span className="font-bold text-black text-xl">Website:</span>{" "}
                {website}
              </p>
            </div>

            <div className="flex gap-4 my-2 items-center">
              <h3 className="text-xl   text-gray-700">
                <span className="font-bold text-black text-xl">Price:</span> $
                {price}
              </h3>
              <h3 className="badge badge-outline p-3 text-gray-600 ">
                {service.addedDate}
              </h3>
            </div>
            <div className="flex  gap-4">
              <a href="#allReviews">
                <h3 className=" btn text-xl py-2 px-4 bg-gray-200 rounded-md font-semibold ">
                  See All Reviews
                </h3>
              </a>
              <a href="#addReview"><h3 className=" btn text-xl py-2 px-4 bg-gray-200 rounded-md font-semibold ">
                Add Review
              </h3></a>
            </div>

            {/* Rating */}

            {/* Summary */}
          </div>
        </div>
        <div className="flex-grow">
          <p className="font-bold  text-2xl line-clamp-3 text-black mt-5 ">
            Description
          </p>
          <p className=" mt-2 text-gray-700 ">{description}</p>
        </div>
        {/*  Add review Section */}
        <section id="addReview" className="bg-gray-100 text-center p-7 my-7 ">
          <h2 className="text-3xl pb-5 font-bold ">Add Your Review</h2>
          <form onSubmit={AddReview}>
            <div className="">
              <textarea
                className="w-full bg-gray border-gray-400 p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
                rows="5"
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>
            <div className="my-3 flex justify-center">
              <Rating
                value={rating}
                onChange={setRating}
                style={{ maxWidth: 200 }}
              ></Rating>
            </div>
            <button
              type="submit"
              className="text-white my-2 w-full bg-[#0F1035] hover:text-[#0F1035] hover:bg-[#0f10356c] font-semibold  px-4 py-2 rounded-lg transition"
            >
              Submit Review
            </button>
          </form>
        </section>

        {/* Reviews Section */}

        <div id="allReviews" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="border-2 border-gray-300 rounded-lg p-4  py-4"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={review.userPhoto || "default-avatar.jpg"}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.userName}</h3>
                  <p className="text-sm">{review.postedDate}</p>
                </div>
              </div>
              <p className="mt-2 mb-3">{review.reviewText}</p>
              <Rating
                value={review.rating}
                style={{ maxWidth: 100 }}
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
