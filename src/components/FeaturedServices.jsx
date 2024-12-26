import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-nine-peach.vercel.app/featured-services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        Feature Services
      </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 gap-6'>
            {
                services.map(service => <FeatureCard key={service._id} service={service}></FeatureCard>)
            }
        </div>
    </div>
);
};

export default FeaturedServices;
