import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../../App';
import firebase from 'firebase/app';
import firebaseConfig from '../../Login/Login/firebase.config';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://lit-plains-47991.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser?.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    // const logout = () =>
    //     firebase
    //         .auth()
    //         .signOut()
    //         .then(() => {
               
    //         })
    //         .catch((error) => {
    //             console.log(error.message)
    //         });

    // const signedOut = () => {
    //     logout();
    //     setLoggedInUser(null)
    // };


    return (

        <nav class="navbar fixed-top navbar-expand-lg navbar-dark my-navbar ">
            <div class="container ">
                <Link class="navbar-brand main-name" to="/">Dream Maker</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="mx-auto"></div>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        {isAdmin && <li class="nav-item">
                            <Link class="nav-link" to="/allOrderList">Admin</Link>
                        </li>}
                        {!loggedInUser?.name && <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>}
                        {loggedInUser?.name && <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {loggedInUser?.name ? loggedInUser?.name : 'Login'}
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link style={{ color: '#1cc7c1' }} class="dropdown-item">Logout</Link></li>
                            </ul>
                        </li>}
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;