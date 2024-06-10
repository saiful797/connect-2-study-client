import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Shared/SectionTitle";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const PaymentSystem = (  { regFee } ) => {

    //TODO: publish able key
    
    const stripePromise = loadStripe('')
    
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
                        <Element stripe = { stripePromise }>
                            <CheckoutForm />
                        </Element>
                    </div>
                </div>
            </dialog>
        </div>
        </div>
    );
};

export default PaymentSystem;