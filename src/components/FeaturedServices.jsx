import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/featured-services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
            {
                services.map(service => <FeatureCard key={service._id} service={service}></FeatureCard>)
            }
        </div>
    </div>
);
};

export default FeaturedServices;
