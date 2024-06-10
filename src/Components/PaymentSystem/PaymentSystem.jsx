import SectionTitle from "../Shared/SectionTitle";

const PaymentSystem = (  { regFee } ) => {
    
    return (
        <div>
            <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button 
                className="text-lg font-bold cursor-pointer border border-green-400 bg-green-100 w-1/2 mx-auto flex justify-center items-center mt-5 mb-1 pt-2 pb-2 hover:bg-green-100 text-[#00b16e]" 
                onClick={()=>document.getElementById('my_modal_12').showModal()}
            >
                Book Now
            </button>
            <dialog id="my_modal_12" className="modal">
                <div className="modal-box bg-green-50">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div>
                        <form>
                            <div className='space-y-1 text-sm'>
                                <div className="mt-5 mb-5">
                                    <h1 className="text-center text-xl font-bold text-[#34a87a]">Payment amount ${regFee}</h1>
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
                                    required
                                />
                            </div>
                            <button
                                type='submit'
                                className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#2db880]'
                            >
                                Pay
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
        </div>
    );
};

export default PaymentSystem;