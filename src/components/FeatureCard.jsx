import { Link } from "react-router-dom";

const FeatureCard = ({ service }) => {
  const { _id, serviceImage, serviceTitle, companyName, description, price } =
    service;

  return (
    <div className="border flex flex-col justify-between gap-4 rounded-lg shadow-lg p-4 bg-white">
      <div className="h-[160px]">
        <img
          src={serviceImage}
          alt={serviceTitle}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className=" flex flex-col flex-grow">
        <h3 className="text-[21px] font-bold text-gray-800">{serviceTitle}</h3>
        <p className="text-base text-gray-600 flex-grow mt-2">{description.substring(0, 170)}</p>
        <div className="mt-4 flex items-center  justify-between">
          <p className="text-lg font-semibold text-gray-600">Price: ${price}</p>
          <Link to={`/service-details/${_id}`}>
            <button className="text-white bg-[#0F1035]  hover:bg-green-800  font-semibold  px-4 py-1.5 rounded-md">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
