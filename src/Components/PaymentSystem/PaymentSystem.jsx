import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const PaymentSystem = (  { session } ) => {

    //TODO: publish able key
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
    
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
                <div className="modal-box bg-green-50 p-10 border-2 border-[#d19944]">
                    <h1 className="text-lg text-center font-bold text-[#d19944]">
                        PAY AND BOOKED YOUR COURSE
                    </h1>
                    <div className="p-px bg-[#d19944] mb-4">

                    </div>
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="px-2 border-zinc-500">
                        <div className="flex justify-between mb-2 text-[#d19944]">
                            <p>Enter Card Number:</p>
                            <div className="flex gap-3 pr-10">
                                <p>Month/Year</p>
                                <p>CVC</p>
                                <p>ZIP</p>
                            </div>
                        </div>
                        <Elements stripe = { stripePromise }>
                            <CheckoutForm session = { session }/>
                        </Elements>
                    </div>
                </div>
            </dialog>
        </div>
        </div>
    );
};

export default PaymentSystem;