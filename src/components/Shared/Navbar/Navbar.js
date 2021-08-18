import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const name = loggedInUser.name;
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://lit-plains-47991.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid mx-5">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <div>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            {isAdmin && <li class="nav-item">
                                <Link class="nav-link" to="/allOrderList">Admin</Link>
                            </li>}
                            {!name && <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>}
                            {name && <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="/login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {name ? name : 'Login'}
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/">Logout</Link></li>
                                </ul>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;