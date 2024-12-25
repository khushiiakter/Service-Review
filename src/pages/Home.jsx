import FeaturedServices from "../components/FeaturedServices";
import MeetOurPartnes from "../components/MeetOurPartners";


const Home = () => {
    return (
        <div>
            <div className="container py-8 mx-auto px-5">
                <FeaturedServices></FeaturedServices>
            </div>
            <div className="container py-8 mx-auto px-5">
                <MeetOurPartnes></MeetOurPartnes>
            </div>
        </div>
    );
};

export default Home;