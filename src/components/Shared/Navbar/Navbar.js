import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../../App';
import firebase from 'firebase/app';
import firebaseConfig from '../../Login/Login/firebase.config';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        fetch('https://lit-plains-47991.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser?.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser?.email])

    const logout = () =>
        firebase
            .auth()
            .signOut()
            .then(() => {

            })
            .catch((error) => {
                console.log(error.message)
            });

    const signedOut = () => {
        logout();
        setLoggedInUser(null)
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const scrollTop = () => window['scrollTo']({top: 0, behavior: 'smooth'});

    return (
        <nav class={`navbar fixed-top navbar-expand-lg navbar-dark ${isSticky ? "my-navbar": "navDefault"}`}>
            <div class="container ">
                <Link class="navbar-brand main-name" to="/" onClick={scrollTop}>Dream Maker</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="mx-auto"></div>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link nav-name" to="/" onClick={() =>  window['scrollTo']({top: 0, behavior: 'smooth'})}>Home</Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link" href="#services">Events</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#testimonial">Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#blogs">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#contact">Contact</Link>
                        </li> */}
                        {isAdmin ? <li className="nav-item">
                            <Link className="nav-link nav-name" to="/allOrderList">Admin Dashboard</Link>
                        </li> : <li className="nav-item">
                            <Link className="nav-link nav-name" to="/bookingList">User Dashboard</Link>
                        </li>}
                        {!loggedInUser?.name && <li class="nav-item">
                            <Link className="nav-link nav-name" to="/login">Login</Link>
                        </li>}
                        {loggedInUser?.name && <li class="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle nav-name" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {loggedInUser?.name ? loggedInUser?.name : 'Login'}
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a style={{ color: '#1cc7c1' }} className="dropdown-item nav-name" onClick={signedOut} href="/login">Logout</a></li>
                            </ul>
                        </li>}
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;