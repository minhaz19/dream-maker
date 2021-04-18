import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';
import './Manage.css'

const Manage = () => {
    const [events, setEvents] = useState([]);
    const [eventDelete, setEventDelete] = useState([]);
    
    useEffect(() =>{
        fetch('https://lit-plains-47991.herokuapp.com/services')
        .then(res =>res.json())
        .then(data => setEvents(data))
    },[])

    const handleDelete = (id) =>{
        fetch(`https://lit-plains-47991.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            setEventDelete(data)
        })
    }
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
                <th className="text-secondary" scope="col">Event Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  events.map((event, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{event.name}</td>
                        <td>${event.price}</td>
                        <td className="deleteIcon" onClick={() =>handleDelete(event._id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default Manage;