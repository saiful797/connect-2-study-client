import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import moment from "moment";
import { Helmet } from "react-helmet-async";

const AddSession = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();

    const name = user.displayName;
    const email = user.email;
    const fee = parseFloat(0);

    const onSubmit = async( data ) => {
        const sessionInfo = {
            ...data,
            name, 
            email,
            postDate: moment().format('L'),
            status: 'pending',
            rating: parseFloat(0),
            regFee: fee,
        }
        const res = await axiosPublic.post('/study-session', sessionInfo );
        if(res.data.insertedId){
            toast.success("Your Session Post Successfully!! Wait For Admin approved");
            reset();
        }
        
        
    }

    return (
        <div className='pt-5 w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-green-50'>
            <Helmet>
                <title>Connect2Study | Add Session</title>
            </Helmet>
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-[#D35400]">Create study session</h1>
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
                                className='w-full px-4 py-3 text-gray-800 focus:outline-[#D35400] border border-[#ecaf86]  rounded-md '
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
                                className='w-full px-4 py-3 text-gray-800 focus:outline-[#D35400] border border-[#ecaf86] rounded-md '
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
                                className='w-full px-4 py-3 text-gray-800 focus:outline-[#D35400] border border-[#ecaf86] rounded-md '
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
                                className='w-full px-4 py-3 text-gray-800 focus:outline-[#D35400] border border-[#ecaf86] rounded-md '
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
                                className='w-full px-4 py-3 text-gray-800 focus:outline-[#D35400] border border-[#ecaf86] rounded-md '
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
                                className='w-full px-4 py-3 text-gray-800 focus:outline-[#D35400] border border-[#ecaf86] rounded-md '
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
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  focus:outline-[#D35400] border border-[#ecaf86]'
                                name='description'
                                placeholder="Enter course description here."
                                {...register("description", { required: true })}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <button
                type='submit'
                className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#D35400]'
                >
                Save & Continue
                </button>
            </form>
        </div>
    );
};

export default AddSession;