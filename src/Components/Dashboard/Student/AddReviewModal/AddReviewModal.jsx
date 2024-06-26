import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const AddReviewModal = ({ id }) => {
    // console.log( id )
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async ( data ) => {
        const rating = parseFloat(data.rating);

        if(rating > 5 || 0 > rating  ){
            toast.error('Rating must be 0 to 5');
            return;
        }

        const res = await axiosPublic.post('/student-review', data);
        if(res.data.insertedId){
            toast.success("Review added successfully!");
            reset();
        }
    }

    return (
        <div>
            <Helmet>
                <title>Connect2Study | Add Review</title>
            </Helmet>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button 
                className="text-lg badge badge-outline font-bold cursor-pointer w-40 mx-auto flex justify-center items-center mt-5 mb-1 pt-3 pb-3 bg-green-200 text-[#00b16e]"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={'Add your review.'}
                onClick={()=>document.getElementById('my_modal_3').showModal()}
            >
                Add Review
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div>
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className='space-y-1 text-sm'>
                                <div className="mt-5 mb-5">
                                    <h1 className="text-center text-xl font-bold text-[#D35400]">
                                        Add Your Review.
                                    </h1>
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='review' className='block text-gray-600'>
                                        Review
                                    </label>

                                    <textarea
                                        className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  focus:outline-[#D35400] border border-[#ecaf86]'
                                        name='review'
                                        id='review'
                                        required
                                        placeholder="Enter your review here."
                                        {...register("review", { required: true })}
                                    ></textarea>
                                </div>
                                <div className='space-y-1 text-sm mt-3'>
                                    <label htmlFor='title' className='block text-gray-800'>
                                        Rating 
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 focus:outline-[#D35400] border border-[#ecaf86] rounded-md '
                                        name='rating'
                                        id='rating'
                                        type='number'
                                        step="0.01"
                                        placeholder='Enter your rating here.'
                                        {...register("rating", { required: true })}
                                        required
                                    />
                                </div>
                            </div>
    
                            <button
                                type='submit'
                                className='w-full p-2 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#D35400]'
                            >
                                Add Review
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddReviewModal;