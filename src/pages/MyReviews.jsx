import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
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
        fetch(`http://localhost:5000/reviews/${_id}`, {
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

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
        <div className="grid grid-cols-1 gap-6">
          {reviews.map((review) => (
            <div key={review._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">{review.serviceTitle}</h2>
              <p className="my-2">{review.reviewText}</p>
              <Rating
                value={review.rating}
                style={{ maxWidth: 120 }}
                readOnly
              />
              <div className="flex gap-4 mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  // onClick={() => openUpdateModal(review)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Update Modal */}
        {/* {selectedReview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
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
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={handleUpdate}
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
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default MyReviews;
