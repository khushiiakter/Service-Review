
const Membership = () => {
    const membershipPlans = [
      {
        name: "Basic",
        price: 99,
        description: "Best for occasional service seekers.",
        features: [
          "Access to basic services",
          "Add up to 5 reviews",
          "Standard customer support",
        ],
      },
      {
        name: "Premium",
        price: 199,
        description: "Perfect for regular users.",
        features: [
          "Unlimited service access",
          "Add up to 20 reviews",
          "Priority support",
          "Exclusive insights",
        ],
      },
      {
        name: "Pro",
        price: 399,
        description: "For professionals and businesses.",
        features: [
          "All Premium features",
          "Unlimited reviews",
          "Dedicated account manager",
          "Early access to new features",
        ],
      },
    ];
  
    return (
      <div className="bg-gray-100 text-gray-900 py-14 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="md:text-5xl text-3xl font-bold text-[#5f1a89] mb-6 text-center">
            Membership Plans
          </h2>
          <p className="text-gray-600 text-center my-6">
            Enhance your experience and unlock exclusive features tailored for your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-6">
            {/* Membership Card */}
            {membershipPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white p-6 flex flex-col justify-between rounded-lg shadow-lg hover:shadow-2xl"
              >
                <h3 className="text-3xl text-center font-bold mb-4 text-[#8e60ac]">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold mb-2 text-gray-800">
                  ${plan.price}
                </p>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                <ul className="text-sm text-gray-600 mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary text-white border-none bg-[#5f1a89] hover:bg-green-700 w-full">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Membership;
  