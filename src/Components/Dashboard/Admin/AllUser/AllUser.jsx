import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle";

const AllUser = () => {
    const [ users, setUsers ] = useState();
    const axiosPublic = useAxiosPublic();

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
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin'? 'Admin'
                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-outline btn-sm">
                                                <FaUsers  className="text-lg text-[#D1A054]"/>
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost btn-outline btn-sm">
                                            <FaTrashAlt  className="text-lg text-red-600"/>
                                        </button>
                                    </td>
                                </tr> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;