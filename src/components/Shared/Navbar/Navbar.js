import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
     useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <div className="header">
        <div className="topnav" id="myTopnav">
            <a><Link to='/'><h6>Dream Maker</h6></Link></a>
            <div class="header-right">
            <a></a>
                <a><Link to="/">Home</Link></a>
                <a><Link style={{display: isAdmin ? 'block' : 'none'}} to="/allOrderList">Admin</Link></a>
                <a><Link to="/login">Login</Link></a>
                <a href="javascript:void(0);" class="icon" onClick={() => myFunction()}>
                <Link><FontAwesomeIcon icon={faBars} />
                </Link></a>
            </div>
        </div>
    </div>
    );
};

export default Navbar;