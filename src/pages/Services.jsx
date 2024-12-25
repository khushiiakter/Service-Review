import { useLoaderData } from "react-router-dom";

import Card2 from "../components/Card2";

const Services = () => {
  const services = useLoaderData();
  return (
    <section className="container py-8  mx-auto px-5">
      <h1 className="text-3xl font-bold mb-6">
       All Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 pb-5">
        {services.map((service) => (
          // <Card2 ></Card2>
          <Card2 key={service._id} service={service}></Card2>
        ))}
      </div>
    </section>
  );
};

export default Services;
