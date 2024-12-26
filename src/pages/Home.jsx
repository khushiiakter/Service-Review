import { Helmet } from "react-helmet-async";
import FeaturedServices from "../components/FeaturedServices";
import MeetOurPartners from "../components/MeetOurPartners";
import WhyUs from "../components/WhyUs";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";

import CountUpSection from "../components/CountUpSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home-Service Review</title>
      </Helmet>
      <div className="container pb-8 pt-6 mx-auto ">
        <Banner></Banner>
      </div>
      
      <div className="container py-8 mx-auto md:px-5">
        <FeaturedServices></FeaturedServices>
      </div>
      <div className="container py-8 mx-auto md:px-5">
        <MeetOurPartners></MeetOurPartners>
      </div>
      <div className="container py-8 mx-auto md:px-5">
        <WhyUs></WhyUs>
      </div>
      <div className="container py-8 mx-auto md:px-5">
        <CountUpSection></CountUpSection>
      </div>
      <div className="container py-8 mx-auto md:px-5">
        <AboutUs></AboutUs>
      </div>

    </div>
  );
};

export default Home;
