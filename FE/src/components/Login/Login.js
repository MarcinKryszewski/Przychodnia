import React, { useState, useContext } from 'react'
import Gallery from './Gallery/Gallery';
import Form from './Form/Form';
import { Navigate } from 'react-router';
import { Context } from '../../Store';

import './Login.css';

function Login () {

  const [state, setState] = useContext(Context);

  return (
    <div>
      {state.userLogged ?
      (<Navigate to="/przychodnia" />) :
      (<div className='app__login flex__center'>     
        <Form />
        <Gallery />      
      </div>)
      }
    </div>    
    )  
}
export default Login