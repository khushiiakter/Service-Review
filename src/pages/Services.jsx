import { useLoaderData } from "react-router-dom";

import Card2 from "../components/Card2";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Services = () => {
  const services = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(services.map((service) => service.category)),
    ];
    setCategories(uniqueCategories);
  }, [services]);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.companyName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="container py-8  mx-auto px-5">
      <Helmet>
        <title>AllServices-Service Review</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">All Services</h1>

      {/* Search and Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
        />

        {/* Category Filter Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
        >
           {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 pb-5">
        {filteredServices.map((service) => (
          // <Card2 ></Card2>
          <Card2 key={service._id} service={service}></Card2>
        ))}
         {filteredServices.length === 0 && (
          <p className="text-gray-500 col-span-full">
            No services found matching your criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default Services;
