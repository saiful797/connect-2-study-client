import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const AdminAnnouncement = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async ( data ) => {
        // console.log(data);
        const res = await axiosPublic.post('/admin-announcement', data);
        if(res.data.insertedId){
            toast.success("Announcement post successfully");
            reset();
        }
    }
    return (
        <div>
            <SectionTitle title='Post Your Announcement'/>
            <div className='md:w-1/2 mx-auto'>
                <form 
                    onSubmit={ handleSubmit(onSubmit)}
                    className='space-y-5' 
                >
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-800'>
                            Title 
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                            name='title'
                            id='title'
                            type='text'
                            placeholder='Enter title here.'
                            {...register("title", { required: true })}
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='announcement' className='block text-gray-600'>
                            Announcement
                        </label>

                        <textarea
                            id='feedback'
                            className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-teal-200 focus:outline-[#34a87a] '
                            name='announcement'
                            placeholder="Enter announcement here."
                            {...register("announcement", { required: true })}
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#2db880]'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminAnnouncement;