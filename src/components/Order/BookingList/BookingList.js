import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderSidebar from '../OrderSidebar/OrderSidebar';
import AllBookingsById from './AllBookingsById';

const BookingList = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookingsByID')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const orderList = orders.filter(order => order.email === loggedInUser.email)
    return (
        <div className="row">
            <OrderSidebar></OrderSidebar>
            <div className="col-md-10 p-4 pr-5 row" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
              {
                  orderList.map(books => <AllBookingsById books={books}></AllBookingsById>)
              }
            </div>
        </div>
    );
};

export default BookingList;