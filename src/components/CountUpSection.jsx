import { useEffect, useState } from "react";
import CountUp from "react-countup";

const CountUpSection = () => {
  const [counts, setCounts] = useState({
    totalUsers: 0,
    totalReviews: 0,
    totalServices: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const userResponse = await fetch("https://assignment-11-server-nine-peach.vercel.app/count/users");
        const reviewResponse = await fetch("https://assignment-11-server-nine-peach.vercel.app/count/reviews");
        const serviceResponse = await fetch("https://assignment-11-server-nine-peach.vercel.app/count/services");

        const userData = await userResponse.json();
        const reviewData = await reviewResponse.json();
        const serviceData = await serviceResponse.json();

        setCounts({
          totalUsers: userData.totalUsers,
          totalReviews: reviewData.totalReviews,
          totalServices: serviceData.totalServices,
        });
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="countup-section grid grid-cols-3 gap-6 text-center py-8 bg-gray-100">
      <div>
        <h2 className="text-5xl font-bold">
          <CountUp end={counts.totalUsers} duration={2} />
        </h2>
        <p className="text-lg font-bold mt-2">Users</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">
          <CountUp end={counts.totalReviews} duration={2} />
        </h2>
        <p className="text-lg font-bold mt-2">Reviews</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">
          <CountUp end={counts.totalServices} duration={2} />
        </h2>
        <p className="text-lg font-bold mt-2">Services</p>
      </div>
    </div>
  );
};

export default CountUpSection;
