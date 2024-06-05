import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const AddSession = () => {
    const { user } = useAuth();
    const name = user.displayName;
    const email = user.email;

    const { register, handleSubmit } = useForm();

    const onSubmit = ( data ) => {

        const sessionInfo = {
            ...data,
            name, 
            email,
            status: 'pending',
            "reg-fee": 0,
        }
        console.log("Session Info: ", sessionInfo);
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
                                placeholder='Enter course duration here. ex.: 60 days'
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
                                name='reg-start'
                                id='reg-start'
                                type='date'
                                {...register("reg-start", { required: true })}
                                required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Registration End
                                </label>
                                <input
                                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                name='reg-end'
                                id='reg-end'
                                type='date'
                                {...register("reg-end", { required: true })}
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
                                name='class-start'
                                id='class-start'
                                type='date'
                                {...register("class-start", { required: true })}
                                required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Class End
                                </label>
                                <input
                                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                name='class-end'
                                id='class-end'
                                type='date'
                                {...register("class-end", { required: true })}
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