import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


const UpdateBooking = (props, key) => {
    const { name, email, service, status, _id } = props.book;
    const [newStatus, setNewStatus] = useState(status);
    const [getId, setGetId] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const [btn, setBtn] = useState(false);
    const [update, setUpdate] = useState({
        id: "",
        status: ""
    })
    const handleId = (id) => {
        const newUpdate = { ...update };
        newUpdate.id = id;
        setUpdate(newUpdate);
        setGetId(false);
        setDropdown(true);
    }
    const handleSelect = (e) => {
        console.log(e)
        const newUpdate = { ...update };
        newUpdate.status = e;
        setUpdate(newUpdate);  
        setDropdown(false);
        setBtn(true);
    }
    const handleClick = () =>{
        fetch('https://lit-plains-47991.herokuapp.com/updateBooking', {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    // console.log(data);
                    setNewStatus(update.status);
                    setBtn(false);
                    setDropdown(true);
                }
            })
    }

   
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{service.name}</td>
                <td>Card</td>
                <td>
                    {
                        getId && <FontAwesomeIcon onClick={() => handleId(_id)} icon={faEdit} style={{ color: "rgb(70, 221, 70)", fontSize: "25px" }}  ></FontAwesomeIcon>
                    }
                    {
                    dropdown && <DropdownButton
                            alignRight
                            title={newStatus}
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                            <Dropdown.Item eventKey="Ongoing">Ongoing</Dropdown.Item>
                            <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                        </DropdownButton>
                     }
                     {
                        btn && <button onClick={handleClick} className="btn btn-success">ok</button>
                     }
                     
                </td>
            </tr>
        </>
    );
};

export default UpdateBooking;