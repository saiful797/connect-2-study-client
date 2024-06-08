import {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FaBookReader } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import { SiStudyverse } from 'react-icons/si';
import useRole from '../../../Hooks/useRole';

const Sidebar = () => {
    const { logOut, user } = useAuth();
    const [isActive, setActive] = useState(false);
    

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    // check user role
    const { role } = useRole();

    // Handle logout
    const handleLogOut = () => {
        logOut();
        toast.success('Logout Successful!!');
        navigate('/');
    }  
    return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-teal-100 text-gray-800 flex justify-between md:hidden'>
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
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-teal-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
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
                role === 'admin' && <>
                  {/* all users */}
                  <NavLink
                    to='allUsers'
                    className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                        isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                    }`}
                  >
                    <TbUsersGroup className='w-5 h-5'/>
                    <span className='mx-4 font-medium'>All Users</span>
                  </NavLink>

                  {/* all study sessions */}
                  <NavLink
                    to='all-study-sessions'
                    className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                        isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                    }`}
                  >
                    <TbUsersGroup className='w-5 h-5'/>
                    <span className='mx-4 font-medium'>All Study Sessions</span>
                  </NavLink>
                </>
              }

              {/* Tutor Routes --->This routes only access Tutor */}
              {  
                role === 'tutor' && <>
                  {/* Add Session */}
                  <NavLink
                    to='add-session'
                    className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                        isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                    }`
                    }
                  >
                    <SiStudyverse className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>Add Session</span>
                  </NavLink>

                  <NavLink
                    to='all-sessions'
                    className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                      isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                    }`
                    }
                  >
                    <FaMagnifyingGlassArrowRight className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>All Study Sessions</span>
                  </NavLink>

                  <NavLink
                    to='all-materials'
                    className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                      isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                    }`
                    }
                  >
                    <FaMagnifyingGlassArrowRight className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>All Materials</span>
                  </NavLink>
                </>
              }
              {/* Student Routes --->This routes only access Student */}
              { 
                role === 'student'  && <>
                  <NavLink
                    to='my-booked-sessions'
                    className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                        isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                    }`
                    }
                  >
                    {/* <MdHomeWork className='w-5 h-5' /> */}
                    <span className='mx-4 font-medium'>My Booked Sessions</span>
                  </NavLink>
                  <NavLink
                    to='add-student-notes'
                    className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                        isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                    }`
                    }
                  >
                    {/* <MdHomeWork className='w-5 h-5' /> */}
                    <span className='mx-4 font-medium'>Add Note</span>
                  </NavLink>

                  <NavLink
                    to='student-personal-notes'
                    className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#a6f7df]   hover:text-gray-700 ${
                        isActive ? 'bg-[#a6f7df]  text-gray-700' : 'text-gray-600'
                    }`
                    }
                  >
                    {/* <MdHomeWork className='w-5 h-5' /> */}
                    <span className='mx-4 font-medium'>Personal Notes</span>
                  </NavLink>
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