import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Aboutus from './components/Aboutus/Aboutus';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import Store from './Store';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import React, { 
  useRef, 
  useState, 
  useEffect, 
  props 
} from 'react'

import {
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {

  /*
  constructor(props){
    super(props);
    this.state = {
      user: '',
      loggedIn: false,
      userSpecial: false
    };
  }

  userLogin = (e) => {
    this.setState
    (
      {
        loggedIn: e.loggedIn,
        user: e.user
      }
    );
  }
  value={this.state.loggedIn}

  user={this.state.user} onChange={this.userLogin}
  */

  render(){
    return(
      <>      
      <Store>
      <NotificationContainer />
      <Navbar  />
      <Routes>        
        <Route path="/przychodnia" element={<Home />} />      
        <Route path="/przychodnia/aboutus" element={<Aboutus />} />
        <Route path="/przychodnia/services" element={<Services />} />
        <Route path="/przychodnia/contact" element={<Contact />} />
        <Route path="/przychodnia/login" element={<Login  />} />
        <Route path="/przychodnia/user/*" element={<User />} />
        <Route path="/przychodnia/adminpanel/*" element={<AdminPanel />} />
      </Routes>
      </Store>
      </>
      
    )
  }  
}

export default App;