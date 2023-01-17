import React, { useState, useContext } from 'react';
import './AdminPanel.css';
import { Context } from '../../Store';

import Users from './Users/Users'
import AddUsers from './Users/AddUsers/AddUsers'
import EditUsers from './Users/EditUsers/EditUsers'

import SideMenu from './Sidemenu/Sidemenu';
import Meds from './Meds/Meds';
import Prescriptions from './Prescriptions/Prescriptions';
import Referals from './Referals/Referals';
import Sickleaves from './Sickleaves/Sickleaves';

import Visits from './Visits/Visits';
import AddVisits from './Visits/AddVisits/AddVisits'
import EditVisits from './Visits/EditVisits/EditVisits'

import images from '../../constants/images';

import {
  Routes,
  Route,
  Navigate,
  useNavigate, 
  Router
} from "react-router-dom";

function AdminPanel () {

  const [menuClicked, setMenuClicked] = useState('Users');
  const [state, setState] = useContext(Context);
  const navigate = useNavigate();
  const MenuClick = e => {
    setMenuClicked(e);
    navigate('/przychodnia/adminpanel/' + e);
  }

  return (
    <div>
      {
        state.userSpecial ?      
        <div className='adminPanel__menu'>
          <div className='adminPanel__menu-wrapper'><SideMenu onChange={MenuClick} /></div>
          <div className='adminPanel__component-wrapper'>
            <Routes>
              <Route path="/Users" element={<Users />} /> 
              <Route path="/Users/Add" element={<AddUsers />} />
              <Route path="/Users/Edit/:id" element={<EditUsers  />} />

              <Route path="/Meds" element={<Meds />} />
              <Route path="/Prescriptions" element={<Prescriptions />} />    
              <Route path="/Referals" element={<Referals />} />    
              <Route path="/Sickleaves" element={<Sickleaves />} /> 

              <Route path="/Visits" element={<Visits />} />          
              <Route path="/Visits/Add" element={<AddVisits />} />
              <Route path="/Visits/Edit/:id" element={<EditVisits />} />
            </Routes>
          </div>             
        </div> :
        (<Navigate to="/przychodnia" />)
      }
    </div>
    
  )
}

export default AdminPanel