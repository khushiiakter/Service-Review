import icon1 from "../assets/expertise_10845563.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="p-5">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="font-medium px-4 text-gray-600">
            Your Trusted Platform for Honest Service Reviews
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center justify-between">
          {/* Left Section: Text */}
          <div className="">
            <p className=" px-2 text-center md:text-left text-gray-700 mb-5">
              At Service Review System, we strive to provide an authentic and
              transparent platform for users to explore and share feedback on a
              wide range of services. Our mission is to empower users with
              trusted information and insights, making service selection
              seamless and reliable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <div className="flex items-center flex-col md:flex-row space-y-2 md:space-x-4">
                <div className="  w-12 rounded-full">
                  <img
                    src={icon1}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Expertise & Reliability
                  </h3>
                  <p className="text-sm text-gray-600">
                    Backed by user feedback and industry expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col md:flex-row space-y-2 md:space-x-4">
                <div className="  w-12  rounded-full">
                  <img
                    src={icon1}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Comprehensive Database
                  </h3>
                  <p className="text-sm text-gray-600">
                    Access reviews on a wide array of services.
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col md:flex-row space-y-2 md:space-x-4">
                <div className="  w-12  rounded-full">
                  <img
                    src={icon1}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Transparent Feedback
                  </h3>
                  <p className="text-sm text-gray-600">
                    Empowering users to make informed decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col md:flex-row space-y-2 md:space-x-4">
                <div className="   w-12 rounded-full">
                  <img
                    src={icon1}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Genuine User Reviews
                  </h3>
                  <p className="text-sm text-gray-600">
                    Verified reviews from real users.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Illustration */}
          <div>
            <img
              src="https://i.ibb.co/Nn0DjqD/64f530215d7a76250e2dcee9b601d4cc.jpg"
              alt="Service Illustration"
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
