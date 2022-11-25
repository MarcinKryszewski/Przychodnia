import React from 'react';
import './Navbar.css';

import images from '../../constants/images';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app_navbar-logo'>
      <img src={images.logo} alt='LOGO' />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>HOME</a></li>
      <li className='p__opensans'><a href='#home'>O NAS</a></li>
      <li className='p__opensans'><a href='#services'>USŁUGI</a></li>
      <li className='p__opensans'><a href='#contact'>KONTAKT</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Logowanie / Rejestracja</a>
      <div />
      <a href="#order" className='p__opensans'>Zamów wizytę</a>
    </div>
  </nav>
);

export default Navbar;