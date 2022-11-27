import React from 'react'
import Navbar from '../Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import Form from './Form/Form';

import './Login.css';

const Login = () => {
  return (
    <div>
        <Navbar />
        <div className='app__login flex__center'>
          <Form />
          <Gallery />
        </div>        
    </div>
  )
}

export default Login