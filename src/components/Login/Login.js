import React from 'react'
import Navbar from '../Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import Form from './Form/Form';

const Login = () => {
  return (
    <div>
        <Navbar />
        <div>
          <Form />
          <Gallery />
        </div>        
    </div>
  )
}

export default Login