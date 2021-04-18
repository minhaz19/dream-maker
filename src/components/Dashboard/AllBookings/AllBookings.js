import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AllBookings.css'

const AllBookings = () => {
    const [Bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className="row">
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email Id</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Pay With</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  Bookings.map((book, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{book.name}</td>
                        <td>{book.email}</td>
                        <td>{book.service.name}</td>
                        <td>Card</td>
                        <td>pending</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default AllBookings;