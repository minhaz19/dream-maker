import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AllBookings.css';
import UpdateBooking from './UpdateBooking';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const AllBookings = () => {
    const [Bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://lit-plains-47991.herokuapp.com/bookings')
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
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email Id</th>
                            <th className="text-secondary" scope="col">Events Name</th>
                            <th className="text-secondary" scope="col">Pay With</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Bookings.map((book,index) => <UpdateBooking book={book}></UpdateBooking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookings;