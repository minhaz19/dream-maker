import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({serviceDetail,handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            setPaymentError(error);
            setPaymentSuccess(null);  
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <br/>
            <h6>Your event charged will be ${serviceDetail.price}</h6>
            <button className="btn btn-brand text-white" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError.message}</p>
        }
        {
            paymentSuccess && <p style={{color: 'green'}}>Payment successful</p>
        }
    </div>
    );
};

export default CheckoutForm;