import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Shared/SectionTitle";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const UpdateNote = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const data = useParams();
    const [ note, setNote ] = useState( { } );
    const navigate = useNavigate();
    
    useEffect(() => {
        axiosSecure.get(`/specific-student-notes/${data.id}`)
        .then( res => {
            // console.log(res.data);
            setNote(res.data)
        })
    })

    const onSubmit = async ( data ) => {
        console.log(data)
        const updateDoc = {
            ...data,
            email: user.email
        }

        const res = await axiosPublic.patch( `/update-student-note/${note._id}`, updateDoc );
        // console.log( res );
        if(res.data.modifiedCount > 0){
            toast.success('Your note updated successfully!');
            reset();
            navigate(-1);
        }
        if(res.data.modifiedCount === 0){
            toast.error('You have not change note!');
            reset();
            navigate(-1);
        }
    }

    return (
        <div>
            <SectionTitle title={'Update Note'}/>
            <div className='md:w-2/3 mx-auto bg-green-50 p-5 rounded-lg'>
                <form 
                    onSubmit={ handleSubmit(onSubmit) }
                >
                    <div className='gap-10 space-y-4'> 
                        <div className='space-y-1 text-sm'>
                            Your Email: {user.email}
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
                                defaultValue={note.title}
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
                                defaultValue={note.description}
                                {...register("description", { required: true })}
                                required
                            />
                        </div>
                    </div>
                    <div className="mx-auto w-full flex justify-center items-center">
                        <button
                            type='submit'
                            className='md:w-1/2 p-2 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#2db880]'
                        >
                            Add Note
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateNote;