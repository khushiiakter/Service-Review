import { Link } from "react-router-dom";


const FeatureCard = ({service}) => {
    const { _id, serviceImage, serviceTitle ,companyName, description, price} = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <div className='flex gap-2 m-2'>
            <figure>
                <img
                    className='w-16'
                    src={serviceImage}
                    alt="Shoes" />
            </figure>
            <div>
                <h4 className="text-2xl">{serviceTitle}</h4>
                
            </div>
        </div>
        <div className="card-body">
            <h2 className="card-title">{companyName}
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            {/* <div className='flex gap-2 flex-wrap'>
                {
                    requirements.map((skill, index) => <p
                        key={index}
                        className='border rounded-md text-center px-2 hover:text-purple-600 hover:bg-gray-400'
                    >{skill}</p>)
                }
            </div> */}
            <div className="card-actions justify-end items-center mt-4">

                <p className='flex items-center'>Price: ${price}</p>

                <Link to={`/service-details/${_id}`}>
                    <button className="btn btn-primary">See Details</button>
                </Link>
                {/* to={`/jobs/${_id}`} */}
            </div>
        </div>
    </div>
    );
};

export default FeatureCard;