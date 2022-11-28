import React from 'react'
import Navbar from '../Navbar/Navbar'

import images from '../../constants/images'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className='flex__center'><img src={images.wip} alt='LOGO' /></div>     
    </div>    
  )
}

export default Contact