import React from "react";

const WhyUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Section: Image/Illustration */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/b3QxGXv/5230311.jpg"
            alt="Why Choose Us"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Section: Content */}
        <div>
          <h3 className="text-green-700 text-lg font-semibold uppercase mb-4">
            Why Choose Us
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Trusted Platform for Service Reviews
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Our platform provides in-depth insights and user reviews for a wide
            range of services. Whether you're looking for reliability,
            affordability, or excellence, we ensure you make informed decisions
            with confidence.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <li className="flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                ✅
              </span>
              <p className="text-gray-700">Comprehensive Service Reviews</p>
            </li>
            <li className="flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                ✅
              </span>
              <p className="text-gray-700">Expert Guidance and Insights</p>
            </li>
            <li className="flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                ✅
              </span>
              <p className="text-gray-700">User-Friendly Experience</p>
            </li>
            <li className="flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                ✅
              </span>
              <p className="text-gray-700">Verified User Feedback</p>
            </li>
          </ul>
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
