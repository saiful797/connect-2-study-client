import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle";
import { Tooltip } from "react-tooltip";
import AddUserRole from "./AddUserRole/AddUserRole";
import { Link } from "react-router-dom";

const AllUser = () => {
    const [ users, setUsers ] = useState();
    const axiosPublic = useAxiosPublic();
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        axiosPublic.get('/allUsers')
        .then(res => {
            // console.log(res.data);
            setUsers(res.data);
        })
    },[])

    return (
        <div>
            {/* Section Title */}
            <SectionTitle title={"All Users"}/>
            <div>
                <div className='space-y-1 text-sm flex justify-center items-center mb-5'>
                    <label htmlFor='title' className='block text-lg font-bold text-gray-500'>
                        Search Bar:
                    </label>
                    <input
                        className='w-3/4 md:w-1/2 lg:w-1/3 px-2 py-2 text-gray-800 border focus:outline-[#34a87a] rounded-md '
                        name='duration'
                        id='duration'
                        type='text'
                        placeholder='Enter name or email here'
                        required
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-lg bg-slate-100">
                                <th className="text-center">#</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th className="text-center">{index+1}</th>
                                    <td className="text-center">{user.name}</td>
                                    <td className="text-center">{user.email}</td>
                                    <td className="text-center">
                                        {
                                            user.role === 'admin'&& <p
                                                className="bg-green-100 badge badge-outline py-3 w-16 text-center text-green-600 cursor-not-allowed"
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={'You can only change Tutor or Student role.'}
                                            >
                                                Admin
                                            </p>  
                                        }
                                        {
                                            user.role === 'tutor' && <Link
                                                className="bg-orange-50 badge badge-outline py-3 w-16 text-center text-orange-500 cursor-pointer"
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={'You can change tutor role.'}
                                                to={`change-user-role/${user._id}`}
                                            >
                                                Tutor
                                            </Link>  
                                        }
                                        {
                                            user.role === 'student'&& <Link
                                                className="bg-sky-100 badge badge-outline py-3 text-sky-600 w-16 text-center "
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={'You can change student role.'}
                                            >
                                                student
                                            </Link>  
                                        }
                                    </td>
                                </tr> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default AllUser;