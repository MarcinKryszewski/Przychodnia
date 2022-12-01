import PropTypes from 'prop-types'
import React, { Component, useEffect, useState } from 'react'
import SideMenu from './Sidemenu/Sidemenu'
import Meds from './Meds/Meds'
import Prescriptions from './Prescriptions/Prescriptions'
import Referals from './Referals/Referals'
import Sickleaves from './Sickleaves/Sickleaves'
import Visits from './Visits/Visits'

import './User.css';

import {
    Routes,
    Route,
    Navigate,
    useNavigate, 
    Router
  } from "react-router-dom";

 function User (props) {

  const [menuClicked, setMenuClicked] = useState('Visits');
  const navigate = useNavigate();
  const MenuClick = e => {
    setMenuClicked(e);
    navigate('/przychodnia/user/' + e);
  }

  /*useEffect((e) => {
    //return(<Navigate to={"/przychodnia/user/" + e} replace={true} />)
    console.log(e);
  }, [menuClicked])*/   

  return (
    <div className='user__menu'>
      <div className='user__menu-wrapper'><SideMenu onChange={MenuClick} /></div>
      <div className='user__component-wrapper'>
        <Routes>  
          <Route path="/Meds" element={<Meds />} />
          <Route path="/Prescriptions" element={<Prescriptions />} />    
          <Route path="/Referals" element={<Referals />} />    
          <Route path="Sickleaves" element={<Sickleaves />} />    
          <Route path="/Visits" element={<Visits />} /> 
        </Routes>
      </div>             
    </div>
  )
}

export default User