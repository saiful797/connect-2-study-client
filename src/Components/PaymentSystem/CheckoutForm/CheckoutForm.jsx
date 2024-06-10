import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CheckoutForm = ({ price }) => {
    const [ errorMessage, setErrorMessage ] = useState( '' );
    const [ clientSecret, setClientSecret ] = useState( '' );
    const [ transactionId, setTransactionId ] = useState( '' );

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if(price > 0){
            axiosSecure.post('/create-payment-intent', { price })
            .then( res => {
                // console.log( res.data.clientSecret );
                setClientSecret( res.data.clientSecret );
            })
        }
    }, []);

    const handleSubmit = async( e )=> {
        e.preventDefault();

        if( !stripe || !elements) {
            return ;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return ;
        }

        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if( error ){
            // console.log('payment error: ', error);
            setErrorMessage(error.message);
        }

        else {
            console.log('Payment Method: ', paymentMethod);
            setErrorMessage( '' );
        }

        //confirmed payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('Confirmed error:', confirmError.message);
        }

        else{
            console.log(' Payment Intent: ', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                // console.log('transaction id: ', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                //now save the payment in the database
                const payment ={
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert. use moment js to
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map( item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                refetch();
                console.log('payment saved', res.data.deleteResult.deletedCount);
                if(res.data?.deleteResult?.deletedCount > 0){
                    toast.success('Payment Successful!!');
                }
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement 
                options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                }}
            />
            <button className="btn btn-outline bg-[#d1a054] mt-10" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600"> {errorMessage} </p>
            { transactionId && <p className="text-green-600 mt-5">Your Transaction ID: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;