import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLocalHospital } from 'react-icons/md'
import './Navbar.css';
import PropTypes from 'prop-types';
import { Context } from '../../Store';

import images from '../../constants/images';

function Navbar () {

  const [toggleMenu, setToggleMenu] = useState('');
  const [state, setState] = useContext(Context);

  const handleClick = e => {
    console.log(state.user);
    setState(state.userLogged = false);
    setState(state.user = '');
    setState(state.userSpecial = false);
  };

  return (
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <Link to='/przychodnia'><img src={images.logo} alt='LOGO' /></Link>
          
        </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'><Link to='/przychodnia'>HOME</Link></li>
          <li className='p__opensans'><Link to='/przychodnia/aboutus'>O NAS</Link></li>
          <li className='p__opensans'><Link to='/przychodnia/services'>USŁUGI</Link></li>
          <li className='p__opensans'><Link to='/przychodnia/contact'>KONTAKT</Link></li>
        </ul>
        <div>{ state.userLogged ?
          (<div className='app__navbar-login'>
              <Link to='/przychodnia/user' className='p__opensans'>Pacjent</Link>
              <div />
              <Link to='/przychodnia' className='p__opensans' onClick={handleClick}>Wyloguj</Link>              
            </div >) : 
            (<div className='app__navbar-login'>
              <Link to='/przychodnia/login' className='p__opensans'>Logowanie</Link>
            </div>)}
          {state.userSpecial &&
            <div>
              <div />
              <Link to='/przychodnia/admin' className='p__opensans'>ADMIN</Link>
            </div>}
        </div>

        
        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='000' fontSize={27} onClick={() => setToggleMenu(true)} />          
          {toggleMenu &&  (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdLocalHospital fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen-links'>
                <li className='p__opensans'><Link to='/przychodnia'>HOME</Link></li>
                <li className='p__opensans'><a href='#home'>O NAS</a></li>
                <li className='p__opensans'><a href='#services'>USŁUGI</a></li>
                <li className='p__opensans'><a href='#contact'>KONTAKT</a></li>
                <li className='p__opensans'><Link to='/przychodnia/login'>Logowanie</Link></li>
                <li className='p__opensans'><Link to='/przychodnia' className='p__opensans'>Wyloguj</Link></li>
              </ul>           
            </div>
          )}        

        </div>
      </nav>
    ) 
}

export default Navbar