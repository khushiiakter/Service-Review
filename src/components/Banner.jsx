const Banner = () => {
  return (
    <div className="carousel  w-full md:h-[560px]">
      <div id="banner1" className="carousel-item relative w-full ">
        <div className=" px-4 md:pl-10 rounded-lg  flex flex-col lg:flex-row items-center md:justify-between  ">
          <div className="md:w-6/12 md:text-left flex flex-col gap-6 md:mx-8  text-center ">
            <h2 className="text-3xl md:leading-tight md:text-[54px] font-extrabold text-[#0F1035]  hover:text-green-900">
              Trusted User Reviews
            </h2>
            <p className="text-gray-600 font-medium  md:w-[500px] md:text-lg ">
              Discover honest feedback from verified users to make informed
              decisions about the services you choose.
            </p>
            <button className=" md:place-self-start place-self-center w-fit py-3 px-6 rounded-full  text-white bg-[#0F1035]  hover:bg-green-800 font-semibold   ">
              Learn More
            </button>
          </div>
          <div className=" md:w-6/12 md:h-[565px]">
            <img
              className="h-full w-full  object-cover"
              src="https://i.ibb.co.com/7yKtyqr/3885964.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner3" className="  text-green-900 font-bold text-xl">
            ❮
          </a>
          <a href="#banner2" className="text-green-900 font-bold text-xl">
            ❯
          </a>
        </div>
      </div>

      <div id="banner2" className="carousel-item relative w-full">
        <div className="  px-4 md:pl-10 rounded-lg  flex flex-col lg:flex-row items-center md:justify-between   ">
          <div className="md:w-6/12 md:text-left flex flex-col gap-6 md:mx-8  text-center ">
            <h2 className="text-3xl md:leading-tight md:text-[54px] font-extrabold text-[#0F1035]  hover:text-green-900">
              Trusted User Reviews
            </h2>
            <p className="text-gray-600 font-medium  md:w-[500px] md:text-lg  ">
              Discover honest feedback from verified users to make informed
              decisions about the services you choose.
            </p>
            <button className=" md:place-self-start place-self-center w-fit py-3 px-6 rounded-full  text-white bg-[#0F1035]  hover:bg-green-800 font-semibold ">
              Learn More
            </button>
          </div>
          <div className=" md:w-6/12 md:h-[565px]">
            <img
              className="h-full w-full object-cover"
              src="https://i.ibb.co.com/XYNWv8M/5351750.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner1" className="  text-green-900 font-bold text-xl">
            ❮
          </a>
          <a href="#banner3" className="text-green-900 font-bold text-xl">
            ❯
          </a>
        </div>
      </div>

      <div id="banner3" className="carousel-item relative w-full">
        <div className=" px-4 md:pl-10 rounded-lg  flex flex-col lg:flex-row items-center md:justify-between   ">
          <div className="md:w-6/12 md:text-left flex flex-col gap-6 md:mx-8  text-center ">
            <h2 className="text-3xl md:leading-tight md:text-[54px] font-extrabold text-[#0F1035]  hover:text-green-900">
              Trusted User Reviews
            </h2>
            <p className="text-gray-600 font-medium  md:w-[500px] md:text-lg ">
              Discover honest feedback from verified users to make informed
              decisions about the services you choose.
            </p>
            <button className=" md:place-self-start place-self-center w-fit py-3 px-6 rounded-full  text-white bg-[#0F1035]  hover:bg-green-800 font-semibold ">
              Learn More
            </button>
          </div>
          <div className=" md:w-6/12 md:h-[565px]">
            <img
              className="h-full w-full object-cover"
              src="https://i.ibb.co.com/NryzLjb/72fb0a640b7b374e7d864d96da0a0468.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#banner2" className="  text-green-900 font-bold text-xl">
            ❮
          </a>
          <a href="#banner1" className="text-green-900 font-bold text-xl">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
