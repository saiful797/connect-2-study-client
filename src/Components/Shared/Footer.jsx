import moment from "moment";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsInstagram } from "react-icons/bs";
import { FaBookReader, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = ( result ) =>{
        if(result){
            toast.success('You have subscribed successfully!');
            reset();
        }
    }
    
    return (
        <footer className="p-5 text-center mt-10 bg-black text-white">
            <div className="footer max-w-6xl grid  place-content-center md:place-content-between	">
                <aside>
                    <div className="ml-12 lg:ml-5 grid place-content-center">
                        <Link to='/' className="text-2xl font-light flex">
                            <div className="relative">
                                <h1 className="flex justify-center items-center text-[#D35400]">
                                    <FaBookReader  className="text-yellow-500 text-4xl"/>
                                <p> <span className="text-6xl font-extralight">C</span>onnect<span className="text-6xl font-extralight text-yellow-500">2</span><span className="text-6xl font-extralight">S</span>tudy</p>
                                </h1>
                            </div>
                        </Link>
                        <p className="text-lg">
                            Learn Together, Achieve Together.
                        </p>
                    </div>
                </aside> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-xl footer-center">Services</h6> 
                    <a className="link link-hover text-md">Study Packages</a>
                    <a className="link link-hover text-md">Blog </a>
                    <a className="link link-hover text-md">Activities</a>
                    <a className="link link-hover text-md">Advertisement</a>
                </nav> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-xl footer-center">Contact Us</h6> 
                    <a className="link link-hover text-md">support@connect2study.com</a>
                    <a className="link link-hover text-md">Phone:  +1 (800) 123-4567</a>
                    <div className="flex justify-center items-center gap-3 text-2xl">
                        <FaFacebook />
                        <FaXTwitter />
                        <BsInstagram />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                </nav> 
                <nav className="mx-auto">
                    <h2 className="footer footer-title text-xl footer-center">Subscribe to Our Newsletter</h2>
                    <form
                        className="w-full"
                        onSubmit={ handleSubmit(onSubmit) }
                    >
                        <div className="mb-4 w-full">
                            <label 
                                className=" text-white text-lg font-bold mb-2" htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                            className="w-full px-3 py-2 rounded-lg focus:outline-[#D35400] border border-[#ecaf86]"
                            type="email"
                            name="email"
                            id="email"
                            {...register("email", { required: true })}
                            required
                            />
                        </div>
                        <div className="text-center">
                            <button 
                                className="bg-[#D35400] text-white px-4 py-2 rounded-xl transition duration-300 w-full" 
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form> 
                </nav>
            </div>
            <div className="bg-white h-[1px] mt-3"></div>
            <div className="mt-2">
                <p>Copyright © {moment().format('YYYY')} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;