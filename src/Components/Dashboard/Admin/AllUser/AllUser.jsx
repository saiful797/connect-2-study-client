import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

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
            <div className="flex justify-evenly py-4">
                <h2 className="text-2xl">All Users</h2>
                {/* <h2 className="text-2xl">Total Users: {users.length}</h2> */}
            </div>
            <div>
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