import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import moment from "moment";

const AddSession = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();

    const name = user.displayName;
    const email = user.email;

    const onSubmit = async( data ) => {
        const sessionInfo = {
            ...data,
            name, 
            email,
            postDate: moment().format('L'),
            status: 'pending',
            "reg-fee": 0,
        }
        const res = await axiosPublic.post('/study-session', sessionInfo );
        if(res.data.insertedId){
            toast.success("Your Session Post Successfully!! Wait For Admin approved");
            reset();
        }
        
        
    }

    return (
        <div className='pt-5 w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-green-50'>
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-[#34a87a]">Create study session</h1>
            </div>
            <form 
                onSubmit={ handleSubmit(onSubmit) }
            >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                name='title'
                                id='title'
                                type='text'
                                placeholder='Enter course title here.'
                                {...register("title", { required: true })}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Course Durations
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                name='duration'
                                id='duration'
                                type='text'
                                placeholder='Enter course duration here. ex.: 2 months'
                                {...register("duration", { required: true })}
                                required
                            />
                        </div>

                        
                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Registration start
                                </label>
                                <input
                                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                name='regStart'
                                id='regStart'
                                type='date'
                                {...register("regStart", { required: true })}
                                required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Registration End
                                </label>
                                <input
                                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                name='regEnd'
                                id='regEnd'
                                type='date'
                                {...register("regEnd", { required: true })}
                                required
                                />
                            </div>
                        </div>

                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Class start
                                </label>
                                <input
                                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                name='classStart'
                                id='classStart'
                                type='date'
                                {...register("classStart", { required: true })}
                                required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Class End
                                </label>
                                <input
                                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                name='classEnd'
                                id='classEnd'
                                type='date'
                                {...register("classEnd", { required: true })}
                                required
                                />
                            </div>
                        </div>

                    </div>
                    <div className='space-y-6'>

                        <div className='space-y-1 text-sm'>
                            Tutor: {name}
                        </div>

                        <div className='space-y-1 text-sm'>
                            Email: {email}
                        </div>

                        <div className='space-y-1'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Registration Fee: <span className="text-red-500">$0</span>
                            </label>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-teal-200 focus:outline-[#34a87a] '
                                name='description'
                                placeholder="Enter course description here."
                                {...register("description", { required: true })}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <button
                type='submit'
                className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#2db880]'
                >
                Save & Continue
                </button>
            </form>
        </div>
    );
};

export default AddSession;