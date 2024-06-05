import { Outlet } from "react-router-dom";
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;