import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../Shared/ScrollToTop";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Connect2Study | Home</title>
            </Helmet>
            Home Page
            <ScrollToTop />
        </div>
    );
};

export default Home;