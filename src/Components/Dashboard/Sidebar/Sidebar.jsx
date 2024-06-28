import {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FaBookReader } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import useRole from '../../../Hooks/useRole';
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { IoDocumentsSharp } from 'react-icons/io5';
import { MdOutlineNoteAdd } from 'react-icons/md';
import { SlNotebook } from "react-icons/sl";
import { LiaUsersSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineNotification } from "react-icons/ai";

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
      <div className='bg-[#D35400] text-gray-800 flex justify-between md:hidden'>
        <div>
            <div className='block cursor-pointer p-4 font-bold'>
              <Link to='/' className="text-2xl font-bold flex">
                <div className="relative bg-white px-2 py-1 rounded-lg shadow-md shadow-yellow-300">
                  <h1 className="flex justify-center items-center text-[#D35400]">
                    <FaBookReader  className="text-yellow-500"/>
                    <p> <span className="text-4xl font-extralight">C</span>onnect<span className="text-4xl font-extralight text-yellow-500">2</span><span className="text-4xl font-extralight">S</span>tudy</p>
                  </h1>
                </div>
              </Link>
            </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none'
        >
          <GiHamburgerMenu  className='h-5 w-5 text-white'/>

        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#D35400] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto bg-white'>
              <Link to='/' className="text-xl font-bold flex">
                <div className="relative">
                  <h1 className="flex justify-center items-center text-[#D35400]">
                    <FaBookReader  className="text-yellow-500"/>
                    <p> <span className="text-4xl font-extralight">C</span>onnect<span className="text-4xl font-extralight text-yellow-500">2</span><span className="text-4xl font-extralight">S</span>tudy</p>
                  </h1>
                </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-2'>
             <nav>
                {/*User Profile */}
                <NavLink
                    to='/dashboard/user-profile'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <CgProfile  className='w-5 h-5'/>
                    <span className='mx-4 font-medium'>Profile</span>
                  </NavLink>

              {/* Admin Routes --->This routes only access Admin */}
              {
                role === 'admin' && <>
                  {/* all users */}
                  <NavLink
                    to='allUsers'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <LiaUsersSolid className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>All Users</span>
                  </NavLink>

                  {/* all study sessions */}
                  <NavLink
                    to='all-study-sessions'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <FaMagnifyingGlassArrowRight className='w-5 h-5'/>
                    <span className='mx-4 font-medium'>All Study Sessions</span>
                  </NavLink>

                  {/* all study materials */}
                  <NavLink
                    to='all-session-materials'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <IoDocumentsSharp className='w-5 h-5'/>
                    <span className='mx-4 font-medium'>All Session Materials</span>
                  </NavLink>

                  {/* admin announcement */}
                  <NavLink
                    to='admin-announcement'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <AiOutlineNotification className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>Create Announcement</span>
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
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >

                    <IoMdAdd className='w-5 h-5'/>
                    <span className='mx-4 font-medium'>Add Session</span>

                  </NavLink>

                  <NavLink
                    to='all-sessions'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <FaMagnifyingGlassArrowRight className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>All Study Sessions</span>
                  </NavLink>

                  <NavLink
                    to='all-materials'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <IoDocumentsSharp className='w-5 h-5'/>
                    <span className='mx-4 font-medium'>All Materials</span>

                  </NavLink>

                  <NavLink
                    to='rejection-feedback'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <VscFeedback className='w-5 h-5' />
                    <span className='mx-4 font-medium'>Rejection Feedback</span>

                  </NavLink>
                </>
              }
              {/* Student Routes --->This routes only access Student */}
              { 
                role === 'student'  && <>
                  <NavLink
                    to='my-booked-sessions'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <TbBrandBooking className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>My Booked Sessions</span>
                  </NavLink>

                  <NavLink
                    to='student-personal-notes'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <SlNotebook className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>Personal Notes</span>
                  </NavLink>

                  <NavLink
                    to='add-student-notes'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-white   hover:text-gray-700 ${
                        isActive ? 'bg-white  text-zinc-700' : 'text-white'
                      }`
                    }
                  >
                    <MdOutlineNoteAdd className='w-5 h-5'/>

                    <span className='mx-4 font-medium'>Add Note</span>
                  </NavLink>
                </>
              }
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={logOut}
            className='flex w-full text-xl badge badge-outline py-5 items-center px-4 mt-5 bg-red-100 text-red-600 transition-colors duration-300 transform'
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