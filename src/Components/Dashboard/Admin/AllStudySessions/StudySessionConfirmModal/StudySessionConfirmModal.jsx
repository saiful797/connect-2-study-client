import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";


const StudySessionConfirmModal = ({ id }) => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async ( data ) => {
        // console.log( parseFloat(data.regFee) );

        const res = await axiosPublic.patch(`/study-session-approved/${id}`, data);

        // console.log(res)
        if(res.data.modifiedCount > 0){

            toast.success("Session Approved successfully!");
            reset();
        }
    }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button 
                className="cursor-pointer bg-teal-50 text-green-700 pl-2 pr-2" 
                onClick={()=>document.getElementById('my_modal_3').showModal()}
                data-tooltip-id="my-tooltip" 
                data-tooltip-content="Are you sure? You want to approve it."
            >
                Approve
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-green-50">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div>
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className='space-y-1 text-sm'>
                                <div className="mt-5 mb-5">
                                    <h1 className="text-center text-xl font-bold text-[#34a87a]">The session free or paid?</h1>
                                    <h1 className="text-center text-sm font-bold text-gray-500">If the session is free input 0 or the session is paid input specific amount.</h1>
                                </div>
                                <label htmlFor='title' className='block text-gray-800'>
                                    Course Fee: 
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-[#34a87a] rounded-md '
                                    name='regFee'
                                    id='regFee'
                                    type='number'
                                    placeholder='Enter course fee here.'
                                    {...register("regFee", { required: true })}
                                    required
                                />
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

export default StudySessionConfirmModal;