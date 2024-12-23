import { useLoaderData } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <section className="container  mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {services.map((service) => (
          <FeatureCard key={service._id} service={service}></FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
