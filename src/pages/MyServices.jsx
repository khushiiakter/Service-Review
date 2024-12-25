import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/services?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [user?.email]);

  // Open modal to update a service
  const handleEdit = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const {
      serviceImage,
      serviceTitle,
      companyName,
      description,
      category,
      website,
      price,
    } = e.target;

    const updatedService = {
      serviceTitle: serviceTitle.value,
      companyName: companyName.value,
      website: website.value,
      description: description.value,
      category: category.value,
      price: parseFloat(price.value),
    };

    fetch(`http://localhost:5000/services/${selectedService._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Service updated successfully!");
          setServices((prev) =>
            prev.map((service) =>
              service._id === selectedService._id
                ? { ...service, ...updatedService }
                : service
            )
          );

          closeModal();
        } else {
          toast.error("Failed to update the service!");
        }
      })
      .catch((err) => console.error(err));
  };

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
        fetch(`http://localhost:5000/services/${_id}`, {
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
              setServices(services.filter((service) => service._id !== _id));
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete service",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting service:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete service",
              icon: "error",
            });
          });

        //
      }
    });
  };

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.serviceTitle.toLowerCase().includes(searchQuery)
  );
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-5">
        <h2 className="text-3xl font-bold text-gray-800 ">My Posted Services ({services.length}) </h2>
        

        

        <label className="input  input-bordered w-96 flex items-center  gap-2">
          <input type="text" value={searchQuery}
          onChange={handleSearchChange} className=" grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>


      <div className="flex flex-col  mt-6">
        <div className="  ">
          <div className="w-full py-2  ">
            <div className=" border border-gray-200  md:rounded-lg">
              <table className="w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="pl-6  text-xl font-bold text-left text-gray-800"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-2 text-xl font-bold text-left text-gray-800"
                    >
                      <span>Price</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4  text-xl font-bold text-left text-gray-800"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-4  text-xl font-bold text-left text-gray-800"
                    >
                      Company Name
                    </th>
                    <th className="px-4  text-xl font-bold text-left text-gray-800">
                      Posted Date
                    </th>
                    <th className="px-4  text-xl font-bold text-left text-gray-800">
                     Edit Options
                    </th>

                  </tr>
                    
                </thead>
                <tbody className="bg-white divide-y divide-gray-300 ">
                  {/* Generate dynamic tr */}
                  {filteredServices.map((service) => (
                    <tr key={service._id}>
                      <td className="pl-6 py-4 text-lg text-gray-600 font-medium whitespace-nowrap">
                        {service.serviceTitle}
                      </td>

                      <td className="px-4 py-4 text-lg text-gray-600  whitespace-nowrap">
                        ${service.price}
                      </td>
                      <td className="px-4 py-4 text-lg text-gray-600  whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p>{service.category}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-lg text-gray-600  whitespace-nowrap">
                        {service.companyName}
                      </td>
                      <td className="px-4 py-4 text-lg text-gray-600  whitespace-nowrap">
                        {service.addedDate}
                      </td>
                      <td className="px-4 py-4 text-lg whitespace-nowrap">
                        <div className="flex items-center gap-x-10">
                          <button
                            onClick={() => handleDelete(service._id)}
                            className="text-gray-600 transition-colors duration-200 font-semibold  hover:text-red-500 focus:outline-none"
                          >
                           
                             Delete
                          </button>

                          <button
                            onClick={() => handleEdit(service)}
                            className="text-gray-600 transition-colors duration-200  font-semibold   hover:text-gray-800 focus:outline-none"
                          >
                            
                              Update
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {isModalOpen && selectedService && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg  shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-center mb-4">Update Service</h2>
                <form onSubmit={handleUpdate} className="space-y-2">
                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700">
                        Service Title
                      </label>
                      <input
                        type="text"
                        name="serviceTitle"
                        defaultValue={selectedService.serviceTitle}
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="companyName"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        defaultValue={selectedService.companyName}
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="website"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      defaultValue={selectedService.website}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      defaultValue={selectedService.description}
                      className="textarea textarea-bordered w-full"
                    />
                  </div>
                  <div className="">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      defaultValue={selectedService.category}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      defaultValue={selectedService.price}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="text-white bg-[#0F1035] hover:text-[#0F1035] hover:bg-[#0f10356c] font-semibold  px-4 py-2 rounded-xl"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="text-white bg-[#0F1035] hover:text-[#0F1035] hover:bg-[#0f10356c] font-semibold  px-4 py-2 rounded-xl ">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
