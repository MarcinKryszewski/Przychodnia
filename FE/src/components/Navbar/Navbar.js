import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLocalHospital } from 'react-icons/md'
import './Navbar.css';
import { Context } from '../../Store';

import images from '../../constants/images';

function Navbar () {

  const [toggleMenu, setToggleMenu] = useState('');
  const [state, setState] = useContext(Context);

  const handleClick = () => {
    setState({
      userLogged : false,
      userId: '',
      userSpecial: false
    });
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
        <div>
          {state.userLogged && state.userSpecial &&
          <div className='app__navbar-login'>
            <Link to='/przychodnia/adminpanel/Users' className='p__opensans'>ADMIN</Link>
            <div />
            <Link to='/przychodnia' className='p__opensans' onClick={handleClick}>Wyloguj</Link>
          </div>
          }

          {state.userLogged === true && state.userSpecial === false &&
          <div className='app__navbar-login'>
            <Link to='/przychodnia/user/Visits' className='p__opensans'>Pacjent</Link>
            <div />
            <Link to='/przychodnia' className='p__opensans' onClick={handleClick}>Wyloguj</Link>
          </div>
          }

          {state.userLogged === false && state.userSpecial === false &&
          <div className='app__navbar-login'><Link to='/przychodnia/login' className='p__opensans'>Logowanie</Link></div>
          }
          
        </div>

        
        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='000' fontSize={27} onClick={() => setToggleMenu(true)} />          
          {toggleMenu &&  (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdLocalHospital fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen-links'>
                <li className='p__opensans'><Link to='/przychodnia'>HOME</Link></li>
                <li className='p__opensans'><Link to='/przychodnia/aboutus'>O NAS</Link></li>
                <li className='p__opensans'><Link to='/przychodnia/services'>USŁUGI</Link></li>
                <li className='p__opensans'><Link to='/przychodnia/contact'>KONTAKT</Link></li>
                {state.userLogged ? (<li className='p__opensans'><Link to='/przychodnia' onClick={handleClick} >Wyloguj</Link></li>) :
                (<li className='p__opensans'><Link to='/przychodnia/login' >Logowanie</Link></li>)}
              </ul>           
            </div>
          )}        

        </div>
      </nav>
    ) 
}

export default Navbar