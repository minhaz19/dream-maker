import React, { useContext, useEffect, useState } from 'react';
import OrderSidebar from '../OrderSidebar/OrderSidebar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';


const stripePromise = loadStripe('pk_test_51IeIzjIDAsPWisA8Td8iQbbhlPKSAW7ys5A9Kc5EpVzhMZJ05JjS4ASCEeuUk9lKrugBLxcNmSVCxM1fmDWatj9J00GJlFdeaH');

const Book = () => {
  let { id } = useParams(); 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    const url = `https://lit-plains-47991.herokuapp.com/events/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setServiceDetail(data))
  }, [id])

  const handlePayment = (paymentId) => {
    const serviceDetails = { 
      ...loggedInUser, 
      service: serviceDetail, 
      payment: paymentId, 
      status: 'Pending',
      orderTime: new Date() 
    }
    fetch('https://lit-plains-47991.herokuapp.com/checkout', {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(serviceDetails)
    })
      .then(res => res.json())
      .then(data => {
        alert("Result placed Successfully");
      })
  }

  return (
    <div className="row">
      <OrderSidebar></OrderSidebar>
      <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
        <h3 className="text-secondary">Please Pay for Booking</h3>
        <input type="text" className="form-control input-size mb-2" value={loggedInUser.name} />
        <input type="text" className="form-control input-size mb-2" value={loggedInUser.email} />
        <input type="text" className="form-control input-size mb-3" value={serviceDetail.name} />
        <Elements stripe={stripePromise}>
          <CheckoutForm serviceDetail={serviceDetail} handlePayment={handlePayment}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Book;