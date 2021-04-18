import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from './components/AddService/AddService';
import Admin from './components/Admin/Admin';
import AllBookings from './components/Dashboard/AllBookings/AllBookings';
import Manage from './components/Dashboard/Manage/Manage';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Book from './components/Order/Book/Book';
import BookingList from './components/Order/BookingList/BookingList';
import OrderSidebar from './components/Order/OrderSidebar/OrderSidebar';
import Review from './components/Order/Review/Review';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
       <Switch>
         <PrivateRoute path="/addService">
            <AddService></AddService>
         </PrivateRoute>
         <PrivateRoute path="/makeAdmin">
           <Admin></Admin>
         </PrivateRoute>
         <PrivateRoute path="/book/:id">
           <Book></Book>
           <OrderSidebar></OrderSidebar>
         </PrivateRoute>
         <PrivateRoute path="/bookingList">
           <BookingList></BookingList>
         </PrivateRoute>
         <PrivateRoute path="/allOrderList">
           <AllBookings></AllBookings>
         </PrivateRoute>
         <PrivateRoute path="/manageService">
           <Manage></Manage>
         </PrivateRoute>
         <PrivateRoute path="/review">
           <Review></Review>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route exact path="/">
           <Home></Home>
         </Route>
       </Switch>
     </Router>
   </UserContext.Provider>
  );
}

export default App;
