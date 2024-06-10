import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const AddStudentNotes = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async ( data ) => {
        const noteInfo = {
            ...data,
            email: user.email
        }

        const res = await axiosPublic.post( '/student-note', noteInfo );
        // console.log( res );
        if(res.data.insertedId){
            toast.success('Note added successfully!');
            reset();
        }
    }

    return (
        <div>
            <Helmet>
                <title>Connect2Study | Student Notes</title>
            </Helmet>
            <SectionTitle 
                title='All Notes'
            />
            <div className='md:w-2/3 p-3 mx-auto'>
                <form 
                    onSubmit={ handleSubmit(onSubmit) }
                >
                    <div className='gap-10 space-y-4'> 
                        <div className='space-y-1 text-sm'>
                            Email: {user.email}
                        </div>
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
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-teal-200 focus:outline-[#34a87a] '
                                name='description'
                                placeholder="Enter your note here."
                                required
                                {...register("description", { required: true })}
                            />
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#2db880]'
                    >
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddStudentNotes;