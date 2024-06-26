import SectionTitle from "../../../Shared/SectionTitle";
import { Tooltip } from "react-tooltip";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [users, setUsers] = useState( [] );
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        axiosSecure.get('/allUsers')
        .then(res => {
            setUsers(res.data);
        })
    },[])

    const onSubmit = async ( data ) => {
        const {text} = data;
        const len = text.split("@").length;

        if(len > 1){
            const email = text;
            setUsers([]);
            const res = await axiosSecure.get(`/user-search-by-email/${email}`);
            if(res.data){
                setUsers(res.data);
                reset();
            }
        }

        if( len === 1 ){
            const name = text.toLowerCase();
            setUsers([]);
            const res = await axiosSecure.get(`/user-search-by-name/${name}`);
            if(res.data){
                setUsers(res.data);
                reset();
            }
        }
        
    }

    const  handleUserDelete = async (id, role) => {
        const res = await axiosPublic.delete(`/delete-a-user/${id}`);
        if(res.data.deletedCount > 0){
            toast.success(`${role} deleted successfully!`)
        }
        refetch();
    }

    return (
        <div>
            <Helmet>
                <title>Connect2Study | All Users</title>
            </Helmet>
            {/* Section Title */}
            <SectionTitle title={"All Users"}/>
            <div>
                <div>
                    <form 
                        onSubmit={ handleSubmit(onSubmit) }
                    >
                        <div className="gap-2">
                            <div className='space-y-1 text-sm flex justify-center items-center mb-5'>
                                <label htmlFor='title' className='block text-lg font-bold text-gray-500'>
                                    Search Bar:
                                </label>
                                <input
                                    className='ml-2 px-2 py-2 w-1/2 md:w-1/3 text-gray-800 border border-[#ecaf86] focus:outline-[#D35400] rounded-md '
                                    name='text'
                                    id='text'
                                    type='text'
                                    placeholder='Enter user name or email here.'
                                    {...register("text", { required: true })}
                                    required
                                />
                            </div>
                            <div className="w-full flex justify-center items-center mb-5">
                                <button
                                    type='submit'
                                    className='bg-[#D35400] text-lg font-medium rounded-md px-4 py-1 text-white'
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
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
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length === 0 && <tr>
                                    <th></th>
                                    <th></th>
                                    <th className="text-xl font-bold text-red-500 text-center mt-20">User Not Found</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            }
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th className="text-center">{index+1}</th>
                                    <td className="text-center">{(user?.name).toUpperCase()}</td>
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
                                    <td>
                                        {
                                            (user.role === 'tutor' || user.role === 'student') && <Link 
                                            className="bg-red-50 border-2 border-red-400 py-1 w-20 text-center text-red-500 px-4 rounded-3xl cursor-pointer"
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={`Delete this ${user.role}!`}

                                            onClick={() => handleUserDelete(user._id, user.role)}
                                        >
                                            Delete
                                        </Link> 
                                        }
                                        {
                                            user.role === 'admin' && <Link 
                                            className="bg-red-50 border-2 py-1 w-20 text-center text-red-500 px-4 rounded-3xl cursor-not-allowed"
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={`You can not delete ${user.role}!`}
                                        >
                                            Delete
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