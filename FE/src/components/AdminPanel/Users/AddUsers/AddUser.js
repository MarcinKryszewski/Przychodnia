import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';

function AddUsers () {

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [adminRights, setAdminRights] = useState(false);

  const changeUsername = event => {
    const value = event.target.value;
    setusername(value);
  };

  const changePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const changeAdminRights = event => {
    const value = event.target.checked;
    setAdminRights(value);
  };

  const addUser = async () => {
    const user = {
        username: username,
        password: password,
        userspecial: adminRights
    };
    try {
        console.log(user);
        const res = await axios.post('http://localhost:3001/api/userAdd', user);
        //const newNote = res.data;
    } catch (error) {
      NotificationManager.error(error.response.data);
    }
  };

  return (
    <div>
      <div>Username: </div>
      <input 
        type="text" 
        id="login" 
        className="adminpanel__adduser-login" 
        name="login" 
        placeholder="LOGIN" 
        onChange={changeUsername}
        value={username}
        required
      />
      <div>Password: </div>
      <input 
        type="text" 
        id="password" 
        className="adminpanel__adduser-password" 
        name="login" 
        placeholder="HASŁO" 
        onChange={changePassword}
        value={password}
        required
      />
      <div>Admin: </div>
      <input 
        type="checkbox" 
        id="adminRights" 
        className="adminpanel__adduser-adminrights" 
        name="adminRights"
        onChange={changeAdminRights}
        value={adminRights}
        required
      />
      <button className="adminpanel__adduser-submit" onClick={addUser}>DODAJ UŻYTKOWNIKA</button>
    </div>
  )
}

AddUsers.propTypes = {}

export default AddUsers