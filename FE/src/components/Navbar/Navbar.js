import React from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLocalHospital } from 'react-icons/md'
import './Navbar.css';
import PropTypes from 'prop-types';

import images from '../../constants/images';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false
    }
  }

  setToggleMenu (e) {
    this.setState
    (
      {
        toggleMenu: e
      }
    )
  }

  render()
  {
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
        <div className='app__navbar-login'>
          { this.props.value ?
            (
              <Link to='/przychodnia/user' className='p__opensans'>Pacjent</Link>
            ) :
            (
              <Link to='/przychodnia/login' className='p__opensans'>Logowanie / Rejestracja</Link>
            )
          }
          <div />
          <a href="#order" className='p__opensans'>Zamów wizytę</a>
        </div>

        
        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='000' fontSize={27} onClick={() => this.setToggleMenu(true)} />
          
          {this.state.toggleMenu &&  (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdLocalHospital fontSize={27} className='overlay__close' onClick={() => this.setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen-links'>
                <li className='p__opensans'><Link to='/przychodnia'>HOME</Link></li>
                <li className='p__opensans'><a href='#home'>O NAS</a></li>
                <li className='p__opensans'><a href='#services'>USŁUGI</a></li>
                <li className='p__opensans'><a href='#contact'>KONTAKT</a></li>
                <li className='p__opensans'><Link to='/przychodnia/login'>Logowanie / Rejestracja</Link></li>
                <li className='p__opensans'><a href="#order" >Zamów wizytę</a></li>
              </ul>           
            </div>
          )}        

        </div>
      </nav>
    ) 
  }
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool
}

export default Navbar