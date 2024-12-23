import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, serviceImage, serviceTitle, companyName, description, price } =
    service;
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);

  // Fetch reviews for the service
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceId=${id}`)
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

    fetch(`http://localhost:5000/reviews`, {
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
      <div className="max-w-5xl text-black mx-auto  p-6  shadow-lg rounded-lg">
        <div className=" flex flex-col md:flex-row gap-8">
          {/* photo */}
          <div className="w-full h-[400px] md:w-2/5">
            <img
              src={serviceImage}
              alt={serviceTitle}
              className="w-full h-full object-cover  rounded-lg shadow-md"
            />
          </div>

          {/*  Details Section */}
          <div className="w-full md:w-3/5 flex flex-col items-start justify-between">
            {/* Title and Meta Info */}
            <div className="mb-4">
              <h1 className="text-[40px] text-black font-bold ">
                {serviceTitle}
              </h1>
              <h3>price:{price}</h3>
            </div>

            {/* Rating */}

            {/* Summary */}
            <div className="my-6">
              <p className=" mt-2">{description}</p>
            </div>
          </div>
        </div>
        {/*  Add review Section */}
        <h2 className="text-xl font-semibold mb-4">Add Your Review</h2>
        <form onSubmit={AddReview}>
          <div className="mb-4">
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
              rows="5"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Your Rating</label>
            <Rating
              value={rating}
              onChange={setRating}
              style={{ maxWidth: 250 }}
            ></Rating>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
          >
            Submit Review
          </button>
        </form>
        {/* Reviews Section */}
        <h2 className="text-xl font-semibold mb-4">Reviews ({totalReviews})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div key={review._id} className="border p-4  py-4">
              <div className="flex gap-4 items-center">
                <img
                  src={review.userPhoto || "default-avatar.jpg"}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{review.userName}</h3>
                  <p className="text-sm">{review.postedDate}</p>
                </div>
              </div>
              <p className="mt-2">{review.reviewText}</p>
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
