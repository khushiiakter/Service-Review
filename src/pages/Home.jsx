import FeaturedServices from "../components/FeaturedServices";
import MeetOurPartners from "../components/MeetOurPartners";
import WhyUs from "../components/WhyUs";


const Home = () => {
    return (
        <div>
            <div className="container py-8 mx-auto px-5">
                <FeaturedServices></FeaturedServices>
            </div>
            <div className="container py-8 mx-auto px-5">
                <MeetOurPartners></MeetOurPartners>
            </div>
            <div className="container py-8 mx-auto px-5">
                <WhyUs></WhyUs>
            </div>
        </div>
    );
};

export default Home;