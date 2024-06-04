import { useState } from 'react'
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

const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

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
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          {/* <AiOutlineBars className='h-5 w-5' /> */}
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
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#cdd3d0] mx-auto'>
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
              {/* Statistics */}
              <NavLink
                to='allUsers'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <TbUsersGroup className='w-5 h-5'/>
                <span className='mx-4 font-medium'>All Users</span>
              </NavLink>

              {/* Add Room */}
              <NavLink
                to='add-room'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <BsFillHouseAddFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>Add Room</span>
              </NavLink>
              {/* My Listing */}
              <NavLink
                to='my-listings'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                {/* <MdHomeWork className='w-5 h-5' /> */}

                <span className='mx-4 font-medium'>My Listings</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            {/* <FcSettings className='w-5 h-5' /> */}

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
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