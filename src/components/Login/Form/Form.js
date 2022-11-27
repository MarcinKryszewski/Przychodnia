import React from 'react'
import PropTypes from 'prop-types'
import './Form.css';

class Form extends React.Component {

  handleClick = () => {
    console.log('this is:', this);
  };
  render() {
    return (
      <div className='login__form-form'>
        <div className='login__form-title'>Logowanie</div>
        <input type="text" id="login" class="login__form-login" name="login" placeholder="LOGIN" />
        <input type="text" id="password" class="login__form-password" name="login" placeholder="HASŁO" />
        <button class="login__form-submit" onClick={this.handleClick}>ZALOGUJ SIĘ</button>
      </div>
    )
  }  
}

export default Form;