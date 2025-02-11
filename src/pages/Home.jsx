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
      <div className="container    mx-auto px-2">
        <Banner></Banner>
      </div>
      
      <div className="container py-8 mx-auto md:px-4 px-2">
        <FeaturedServices></FeaturedServices>
      </div>
      <div className="container py-8 mx-auto md:px-3">
        <MeetOurPartners></MeetOurPartners>
      </div>
      <div className="container py-8 mx-auto md:px-3">
        <WhyUs></WhyUs>
      </div>
      <div className="container py-8 mx-auto md:px-3">
        <CountUpSection></CountUpSection>
      </div>
      <div className="container py-8 mx-auto md:px-3">
        <AboutUs></AboutUs>
      </div>

    </div>
  );
};

export default Home;
