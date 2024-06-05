import { useEffect, useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill, BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
import { FaBookReader } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { TbUsersGroup } from "react-icons/tb";
import useAxiosPublic from '../../../Hooks/useAxiosPublic'

const Sidebar = () => {
    const { logOut, user } = useAuth();
    const [isActive, setActive] = useState(false);
    const [role, setRole] = useState(null);
    const axiosPublic = useAxiosPublic();

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    // check user role
    useEffect(() => {
        const email = user.email;
        axiosPublic.get(`/role/${email}`)
        .then(res => {
            setRole(res.data.role);
            console.log("user role: ", res.data.role);
        })
    },[])

    // Handle logout
    const handleLogOut = () => {
        logOut();
        toast.success('Logout Successful!!');
        navigate('/');
    }  
    return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-teal-50 text-gray-800 flex justify-between md:hidden'>
        <div>
            <div className='block cursor-pointer p-4 font-bold'>
                <Link to='/' className="text-2xl font-bold flex">
                    <div className="relative">
                        <h1 className="flex font-sofia text-[#34a87a]">
                            <FaBookReader  />
                            Connect2Study
                        </h1>
                    </div>
                </Link>
            </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-g#a6f7df'
        >
          <GiHamburgerMenu  className='h-5 w-5'/>

        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-teal-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto bg-white'>
                <Link to='/' className="text-2xl font-bold flex">
                    <div className="relative">
                        <h1 className="flex font-sofia text-[#34a87a]">
                            <FaBookReader  />
                            Connect2Study
                        </h1>
                    </div>
                </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            
            <nav>
                {/* Admin Routes --->This routes only access Admin */}
                {
                    role === 'admin'? <>
                        {/* all users */}
                        <NavLink
                            to='allUsers'
                            className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                                isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                            }`
                            }
                        >
                            <TbUsersGroup className='w-5 h-5'/>
                            <span className='mx-4 font-medium'>All Users</span>
                        </NavLink>
                    </>
                    :
                    <>
                        {
                            role === 'tutor'? <>
                                {/* Tutor Routes --->This routes only access Tutor */}
                                {/* Add Session */}
                                <NavLink
                                    to='add-session'
                                    className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                                        isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                                    }`
                                    }
                                >
                                    <BsFillHouseAddFill className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Add Session</span>
                                </NavLink>
                            </>
                            :
                            <>
                                {/* Student Routes --->This routes only access Student */}
                                <NavLink
                                    to='my-listings'
                                    className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                                        isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                                    }`
                                    }
                                >
                                    {/* <MdHomeWork className='w-5 h-5' /> */}

                                    <span className='mx-4 font-medium'>My Listings</span>
                                </NavLink>
                            </>
                        }
                    </>
                }
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            {/* <FcSettings className='w-5 h-5' /> */}

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#a6f7df]   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <RiLogoutCircleRLine className='w-5 h-5'/>

            <span onClick={handleLogOut} className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar