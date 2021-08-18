import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../../images/google-plus.png'
import './Login.css'
import { useState } from 'react';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };



  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
  });

console.log(user);

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'name') {
      isFieldValid = e.target.value;
    }
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      const passwordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = passwordValid && passwordHasNumber;

    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
    console.log(e.email);
    e.preventDefault();
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          setUser(newUserInfo);
          updateUserName(user.name)
          const { displayName, email } = res.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          setUser(newUserInfo);
          const { displayName, email } = res.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });
    }
  }
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log("update Successfuly")
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="loginBg">
      <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5 bgColor">
          <form action="" onSubmit={handleSubmit}>
            { newUser && <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" onBlur={handleBlur} className="form-control"  name="name" required/>
            </div>}
            <div className="form-group">
              <label htmlFor="">Email Address</label>
              <input type="text" onBlur={handleBlur} className="form-control" name="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" onBlur={handleBlur} className="form-control" name="password" required/>
            </div>
            <div className="form-group">
              <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser )} id="" />
              <label htmlFor="newUser" className="text-danger ms-1">Open a new account</label>
              <br />
              { !newUser && <label htmlFor=""> For admin use <span className="text-primary">minhaz123@gmail.com</span> as a mail and <span className="text-primary">minhaz123</span> as a password</label>}
            </div>
            <div className="form-group mt-3">
              <input type="submit" className="btn btn-brand text-white" value={newUser ? 'Create new account' : 'Login'} />
            </div>
          </form>
          <p style={{color:"red"}}>{user.error}</p>
          <hr />
          <div className="from-group mt-3 d-flex justify-content-center ">
            <button className="btn btn-brand text-white rounded-pill" onClick={handleGoogleSignIn}><img style={{ width: '25px' }} src={google} alt="" /> Google Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;