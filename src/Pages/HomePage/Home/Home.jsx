import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../Shared/ScrollToTop";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Connect2Study | Home</title>
            </Helmet>
            <div className="">
                <Banner />
            </div>
            <ScrollToTop />
        </div>
    );
};

export default Home;