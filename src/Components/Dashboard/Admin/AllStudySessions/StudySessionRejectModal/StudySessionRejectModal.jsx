import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import StudySessionUpdateModal from '../StudySessionUpdateModal/StudySessionUpdateModal';

const StudySessionRejectModal = ({ sessionInfo }) => {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = async ( data ) => {
        const feedBackDoc = {
            sessionID: sessionInfo._id,
            name: sessionInfo.name,
            email: sessionInfo.email,
            ...data,
        }

        console.log("Feedback: ", feedBackDoc);
    }
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button 
                className="cursor-pointer bg-red-50 text-red-500 pl-2 pr-2" 
                onClick={()=>document.getElementById('my_modal_4').showModal()}
                data-tooltip-id="my-tooltip" 
                data-tooltip-content="Do you want to update it?"
            >
                Reject
            </button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box bg-green-50">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div>
                        <form 
                            onSubmit={ handleSubmit(onSubmit)}
                            className='space-y-5' 
                        >
                            <div className='space-y-1 text-sm'>
                                <div className="mt-5 mb-5">
                                    <h1 className="text-center text-xl font-bold text-[#34a87a]">Session rejection reason</h1>
                                    <h1 className="text-center text-sm font-bold text-gray-500">If you will solve it. Then send again approval request.</h1>
                                </div>
                                <label htmlFor='reason' className='block text-gray-800'>
                                    Rejection reason: 
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                    name='reason'
                                    id='reason'
                                    type='text'
                                    placeholder='Enter course fee here.'
                                    {...register("reason", { required: true })}
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='feedback' className='block text-gray-600'>
                                    Feedback
                                </label>

                                <textarea
                                    id='feedback'
                                    className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-teal-200 focus:outline-[#34a87a] '
                                    name='feedback'
                                    placeholder="Enter course feedback here."
                                    {...register("feedback", { required: true })}
                                ></textarea>
                            </div>
                            <button
                                type='submit'
                                className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#2db880]'
                            >
                                Confirm
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

StudySessionUpdateModal.propTypes ={
    sessionInfo: PropTypes.object.isRequired,
}

export default StudySessionRejectModal;