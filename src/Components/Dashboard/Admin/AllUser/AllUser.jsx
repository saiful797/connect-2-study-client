import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import { Tooltip } from "react-tooltip";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await  axiosSecure.get('/allUsers');
            return res.data;
        }
    })

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
                                <th className="text-center">Update Role</th>
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
                                                className="bg-green-100 badge badge-outline py-3 w-16 text-center text-green-600"
                                            >
                                                Admin
                                            </p>  
                                        }
                                        {
                                            user.role === 'tutor' && <p
                                                className="bg-orange-50 badge badge-outline py-3 w-16 text-center text-orange-500"
                                            >
                                                Tutor
                                            </p>  
                                        }
                                        {
                                            user.role === 'student'&& <p
                                                className="bg-sky-100 badge badge-outline py-3 text-sky-600 w-16 text-center "
                                            >
                                                student
                                            </p>  
                                        }
                                    </td>
                                    <td className="text-center">
                                        {
                                            user.role === 'admin'&& <Link 
                                                className="bg-green-50 border-2 py-1 w-20 text-center text-green-400 cursor-not-allowed px-4 rounded-3xl"
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={'You can only change Tutor or Student role.'}
                                            >
                                                Update
                                            </Link>  
                                        }
                                        {
                                           ( user.role === 'tutor' || user.role === 'student') && <Link
                                                className="bg-green-50 border-2 border-green-600 py-1 w-20 px-4 text-center text-green-600 cursor-pointer rounded-3xl"
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={'You can change role.'}
                                                to={`change-user-role/${user._id}`}
                                            >
                                                Update
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