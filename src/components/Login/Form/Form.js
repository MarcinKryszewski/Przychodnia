import React, { useRef, useState, useEffect, props } from 'react'
import PropTypes from 'prop-types'
import './Form.css';

class Form extends React.Component {

  constructor(props) {
    super(props);
    //this.handleLogIn = this.handleLogIn.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    //this.handleErrorMsg = this.handleErrorMsg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: '',
      password: '',
      errorMsg: '',
      loggedIn: false
    }
  }

  handleUser(e) {
    this.setState({user: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleErrorMsg(e) {
    this.setState({error: e.target.value});
  } 

  handleSubmit = async () => {
    this.setState
    (
      {
        user: this.state.user,
        password: this.state.password,
        loggedIn: true
      },
      () => {this.props.onChange(this.state)}
    );    
  };

  render(){
    return (
      <div className='login__form-form'>
        <div className='login__form-title'>Logowanie</div>
        <input 
          type="text" 
          id="login" 
          className="login__form-login" 
          name="login" 
          placeholder="LOGIN" 
          onChange={this.handleUser}
          value={this.state.user}
          required
        />
        <input 
          type="text" 
          id="password" 
          className="login__form-password" 
          name="login" 
          placeholder="HASŁO" 
          onChange={this.handlePassword}
          value={this.state.password}
          required
        />
        <button className="login__form-submit" onClick={this.handleSubmit}>ZALOGUJ SIĘ</button>
      </div>)
  }    
}

export default Form;