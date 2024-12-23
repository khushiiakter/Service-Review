import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ServiceDetail = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, serviceImage, serviceTitle, companyName, description, price } =
    service;
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  // const handleRatingChange = (rate) => {
  //   setRating(rate / 20);
  // };

  const AddReview = (e) => {
    e.preventDefault();
    if (!reviewText || rating === 0) {
      toast.error("Please provide both a review and a rating.");
      return;
    }

    const review = {
      _id,
      userName: user?.displayName || "Anonymous",
      userPhoto: user?.photoURL || "",
      userEmail: user?.email,
      reviewText,
      rating,
      postedDate: new Date().toISOString().split("T")[0],
    };
   
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
      })

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

            {/* Action Buttons */}
            {/* <div className="flex gap-4 mt-auto">
            <button
              onClick={handleDelete}
              className="btn text-gray-400 hover:bg-red-800 rounded-lg btn-outline "
            >
              Delete Movie
            </button>
          
            <button
              onClick={handleAddToFavorites}
              className="btn btn-outline text-gray-400    hover:bg-[#5f1a89]  "
              disabled={!user}
            >
              Add to Favorites
            </button>
          
            <Link to={`/update-movie/${_id}`}>
              <button className="btn btn-outline text-gray-400  hover:bg-[#5f1a89]">
                Update
              </button>
            </Link>
          </div> */}
          </div>
        </div>
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
            {/* <Rating
            onClick={handleRatingChange}
            ratingValue={rating * 20} // Convert 1-5 scale to 0-100 for react-simple-star-rating
            size={24}
            transition
            fillColor="gold"
            emptyColor="gray"
          /> */}
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
      </div>
    </section>
  );
};

export default ServiceDetail;
