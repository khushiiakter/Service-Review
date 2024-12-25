import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceImage: "",
    serviceTitle: "",
    companyName: "",
    website: "",
    description: "",
    category: "",
    price: "",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to send to the backend
    const newService = {
      ...formData,
      addedDate: new Date().toISOString().split("T")[0], // Current date
      userEmail: user?.email,
    };

    // Send data to the backend
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service added successfully.",
            icon: "success",
          });
          setFormData({
            serviceImage: "",
            serviceTitle: "",
            companyName: "",
            website: "",
            description: "",
            category: "",
            price: "",
          });
          navigate("/services")
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add service. Please try again.",
            icon: "error",
          });
        }
      })
      
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>AddService-Service Review</title>
      </Helmet>
      <div className="bg-white shadow-lg mt-5 mb-10 rounded-lg w-full max-w-3xl px-8 py-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Service
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Title and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">
                Service Title
              </label>
              <input
                type="text"
                name="serviceTitle"
                value={formData.serviceTitle}
                onChange={handleInputChange}
                required
                placeholder="Enter service title"
                className="w-full px-3 py-2 border rounded shadow "
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                placeholder="Enter category"
                className="w-full px-3 py-2 border rounded shadow"
              />
            </div>
          </div>
          {/* Company Name and Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                placeholder="Enter company name"
                className="w-full px-3 py-2 border rounded shadow"
              />
            </div>
            {/* Price and Description */}
          <div>
            <label className="block font-medium text-gray-700">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
              placeholder="Enter price"
              className="w-full px-3 py-2 border rounded shadow"
            />
          </div>
            
          </div>
          {/* Service Image */}
          <div>
            <label className="block font-medium text-gray-700">
              Service Image (URL)
            </label>
            <input
              type="url"
              name="serviceImage"
              value={formData.serviceImage}
              onChange={handleInputChange}
              required
              placeholder="Enter image URL"
              className="w-full px-3 py-2 border rounded shadow"
            />
          </div>
          {/* hhhhhhh */}
          <div>
              <label className="block font-medium text-gray-700">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Enter website URL"
                className="w-full px-3 py-2 border rounded shadow"
              />
            </div>
          <div>
            <label className="block font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Enter a short description"
              className="w-full px-3 py-2 border rounded shadow"
            />
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 w-full px-4 rounded-md shadow"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
