import React, { useState, useContext } from 'react'
import './Form.css';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { Context } from '../../../Store';

function Form () {

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useContext(Context);

  const loginUser = async () => {
    const user = {
        username: username,
        password: password
    };
    try {
      const res = await axios.post(process.env.REACT_APP_SERVER_URL + "/users/login", user);
      const loggedUser = res.data;
      NotificationManager.success('Zalogowano', 'Logowanie');   
      
      if (res.status === 222){
        setState({
          userLogged: true,
          userId: loggedUser,
          userSpecial: true});
        NotificationManager.warning('ADMIN LOGGED');
      } else {
        setState({
          userLogged: true,
          userId: loggedUser,
          userSpecial: false
        });
      }      
    } catch (error) {
      NotificationManager.error(error.response.data);
    }
  };

  const changeUsername = event => {
    const value = event.target.value;
    setusername(value);
  };

  const changePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };

  return (    
    <div className='login__form-form'>
      <div className='login__form-title'>Logowanie</div>
      <input 
        type="text" 
        id="login" 
        className="login__form-login" 
        name="login" 
        placeholder="LOGIN" 
        onChange={changeUsername}
        value={username}
        required
      />
      <input 
        type="text" 
        id="password" 
        className="login__form-password" 
        name="login" 
        placeholder="HASŁO" 
        onChange={changePassword}
        value={password}
        required
      />
      <button className="login__form-submit" onClick={loginUser}>ZALOGUJ SIĘ</button>
    </div>
  )
}

export default Form;