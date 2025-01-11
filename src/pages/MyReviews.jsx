import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const [selectedReview, setSelectedReview] = useState(null);
  const [newReviewText, setNewReviewText] = useState("");
  const [newRating, setNewRating] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://assignment-11-server-nine-peach.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-nine-peach.vercel.app/reviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Movie has been deleted.",
                icon: "success",
              });
              setReviews(reviews.filter((review) => review._id !== _id));
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete movie",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting movie:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete movie",
              icon: "error",
            });
          });

        //
      }
    });
  };
  // Open update modal
  const openUpdateModal = (review) => {
    setSelectedReview(review);
    setNewReviewText(review.reviewText);
    setNewRating(review.rating);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedReview = {
      reviewText: newReviewText,
      rating: newRating,
    };

    fetch(`https://assignment-11-server-nine-peach.vercel.app/reviews/${selectedReview._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Review updated successfully!");
          setReviews(
            reviews.map((review) =>
              review._id === selectedReview._id
                ? { ...review, reviewText: newReviewText, rating: newRating }
                : review
            )
          );
          setSelectedReview(null);
        } else {
          toast.error("Failed to update review.");
        }
      })
      .catch((error) => {
        toast.error("Failed to update review.");
      });
  };
  return (
    <section className="py-10">
      <Helmet>
        <title>MyReviews-Service Review</title>
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Reviews ({reviews.length})</h1>
        {reviews.length === 0 && (
          <p className="text-center text-2xl text-gray-500">
            You haven't submitted any reviews yet.
          </p>
        )}
        <div className="grid grid-cols-1 gap-6">
          {reviews.map((review) => (
            <div key={review._id} className="border p-4 md:flex-row flex-col  gap-6 justify-between  rounded shadow flex">
              <div className="md:w-8/12">
                <h2 className="text-2xl font-bold">{review.serviceTitle}</h2>
                <p className="my-2 ">{review.reviewText.substring(0, 150)}...</p>
                <Rating
                  value={review.rating}
                  style={{ maxWidth: 120 }}
                  readOnly
                />
              </div>
              <div className="flex gap-4 items-end">
                <button
                  className="bg-[#0F1035] hover:bg-green-800  text-white px-4 py-2 rounded-3xl "
                  onClick={() => openUpdateModal(review)}
                >
                  Update
                </button>
                <button
                  className="bg-[#0F1035]   text-white px-4 py-2 rounded-3xl  hover:bg-red-800"
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Update Modal */}
        {selectedReview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <form
              onSubmit={handleUpdate}
              className="bg-white p-6 rounded shadow-lg max-w-md w-full"
            >
              <h2 className="text-xl font-bold mb-4">Update Review</h2>
              <p className="font-semibold">Service Title</p>
              <p className="mb-4">{selectedReview.serviceTitle}</p>
              <textarea
                className="w-full p-2 border rounded mb-4"
                rows="4"
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
              ></textarea>
              <div className="mb-4">
                <Rating
                  value={newRating}
                  onChange={setNewRating}
                  style={{ maxWidth: 150 }}
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save Changes
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setSelectedReview(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyReviews;
