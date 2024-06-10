import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PropTypes from 'prop-types';

const CheckoutForm = ({ session }) => {
    const [ errorMessage, setErrorMessage ] = useState( '' );
    const [ clientSecret, setClientSecret ] = useState( '' );
    const [ transactionId, setTransactionId ] = useState( '' );

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const price = session.regFee;

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
                console.log('transaction id: ', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment ={
                    email: user.email,
                    price: session.regFee,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert. use moment js to
                    title: session.title,
                    tutor_email: session.email,
                    sessionID: session._id,
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                const bookedInfo = {
                    sessionId: session._id,
                    title: session.title,
                    classStart: session.classStart,
                    booked_date: moment().format('L'),
                    name: user?.displayName,
                    student_email: user?.email,
                    tutor_email: session.email
                }
                const result = await axiosPublic.post('/study-session-booked', bookedInfo)
                if( result.data.insertedId ){
                    toast.success('Session booked successfully!');
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
            <p className="cursor-pointer w-1/2 py-2 mx-auto bg-[#d1a054] mt-10 text-xl text-white text-center rounded-full" type="submit" disabled={!stripe || !clientSecret}>
                Pay <span className="ml-4">${ price }</span>
            </p>
            <p className="text-red-600"> {errorMessage} </p>
            { transactionId && <p className="text-green-600 mt-5">Your Transaction ID: {transactionId}</p>}
        </form>
    );
};
CheckoutForm.propTypes={
    session: PropTypes.object.isRequired,
}
export default CheckoutForm;