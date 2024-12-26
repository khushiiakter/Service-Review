import { Link } from "react-router-dom";

const Card2 = ({ service }) => {
  const {
    _id,
    serviceImage,
    category,
    serviceTitle,
    companyName,
    description,
    price,
    
  } = service;
  return (
    <div className="border flex flex-col rounded-lg shadow-lg p-6 bg-white">
      <figure className="">
        <img
          src={serviceImage}
          alt={serviceTitle}
          className="w-full h-52 object-cover rounded-lg"
        />
      </figure>
      <div className="pt-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800">{serviceTitle}</h3>
        
        <p className="text-base text-justify text-gray-600 flex-grow mt-2">{description.substring(0, 173)} .....</p>
        <div className="my-4 flex items-center  justify-between">
          <p className="text-lg font-semibold text-gray-600">Price: ${price}</p>
          <p className=" badge-outline  py-3 px-4 badge font-medium text-gray-500">{category}</p>

        </div>
        <Link to={`/service-details/${_id}`}>
            <button className="text-white bg-[#0F1035]  hover:bg-green-800  font-semibold  px-4 py-2 rounded-xl">
              See Details
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Card2;
