import { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../Hooks/useAuth";
import { RxHamburgerMenu } from "react-icons/rx";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    // Toggle 'Dark' and 'Light' theme
    const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light");
    const handleToggle = (e) =>{
        if(e.target.checked){
            setTheme("dark");
        }
        else{
            setTheme('light');
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute('data-theme', localTheme)
    },[theme]);
    // console.log(user);
    
    const navLinks=<>
        <li className=" font-extrabold"><NavLink to="/">Home </NavLink></li>
        <li className=" font-medium"><NavLink to="/about">About Us</NavLink></li>
        <li className=" font-medium"><NavLink to="/contactUs">Contact Us</NavLink></li>
            
    </>
    const handleLogOut = () => {
        logOut();
        toast.success('Logout Successful!!');
        navigate('/');
    }

    return (
    <div className="navbar fixed z-50 bg-opacity-0 border mt-px py-5 border-[#5eedb4] md:rounded-lg max-w-7xl mx-auto bg-black">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-sm lg:hidden">
                    <RxHamburgerMenu className="w-5 h-5"/>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <div className="ml-3 lg:ml-5">
                <Link to='/' className="text-2xl md:text-4xl font-bold flex">
                    <div className="relative">
                        <h1 className="flex font-sofia text-[#34a87a]">
                            <FaBookReader  />
                            Connect2Study
                        </h1>
                    </div>
                </Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
                {navLinks}
            </ul>
        </div>
        
        <div className="navbar-end">
            <div className="flex justify-center items-center mr-5 rounded-full">
                <label className="swap swap-rotate">
                    <input 
                    
                        type="checkbox" 
                        onChange={handleToggle} className="theme-controller"  value="synthwave" 
                        checked = {theme === 'light'? false : true}
                    />
                    <svg className="swap-off fill-current w-6 h-6 text-[#34a87a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    <svg className="swap-on fill-current w-6 h-6 text-[#34a87a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                </label>
            </div>

            <div className="flex justify-center items-center gap-2 mr-3">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user? <img alt="user image" src={user.photoURL} />
                                :
                                <img alt="user image" src="https://i.ibb.co/2S1508F/profile-4675159.png"/>
                            }
                        </div>
                    </div>
                    {
                        user?<ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-5 rounded-box w-52 bg-slate-100 text-lg font-bold shadow-md">
                        <li>
                            <a>Dashboard</a>
                        </li>
                        <li>
                            <Link onClick={handleLogOut}>Logout</Link>
                        </li>
                    </ul>
                    : 
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-5 bg-slate-100 rounded-box w-52 text-lg font-bold shadow-md">
                        <li><a>Dashboard</a></li>
                        <li><Link to='/signIn'>Sign in</Link></li>
                        <li><Link to='/signUp'>Sign up</Link></li>
                    </ul>
                    }
                </div>
            </div>
            
        </div>
        <Tooltip id="my-tooltip" />
    </div>
  )
};

export default Navbar;