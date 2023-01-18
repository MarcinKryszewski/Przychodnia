import React, { useContext, useState } from 'react'
import { Context } from '../../Store';

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
    useNavigate
  } from "react-router-dom";

 function User () {

  const [, setMenuClicked] = useState('Visits');
  const [state] = useContext(Context);
  const navigate = useNavigate();
  const MenuClick = e => {
    setMenuClicked(e);
    navigate('/przychodnia/user/' + e);
  } 

  return (
    <div>
      {
        state.userLogged ? 
        <div className='user__menu'>
          <div className='user__menu-wrapper'><SideMenu onChange={MenuClick} /></div>
          <div className='user__component-wrapper'>
            <Routes>  
              <Route path="/Meds" element={<Meds />} />
              <Route path="/Prescriptions" element={<Prescriptions />} />    
              <Route path="/Referals" element={<Referals />} />    
              <Route path="/Sickleaves" element={<Sickleaves />} />    
              <Route path="/Visits" element={<Visits />} /> 
            </Routes>
          </div>             
        </div> :
        (<Navigate to="/przychodnia" />)
      }
    </div>    
  )
}

export default User