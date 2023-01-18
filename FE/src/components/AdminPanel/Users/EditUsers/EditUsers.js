import React, { useState, useEffect } from 'react'
import { NotificationManager } from 'react-notifications';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUsers () {

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [adminRights, setAdminRights] = useState('');
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    GetUser();
  }, []);

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

  const GetUser = async () => {
    const user = await (await axios.get(process.env.REACT_APP_SERVER_URL + '/user/' + id)).data;
    
    setusername(user.username);
    setPassword(user.password);
    setAdminRights(user.userspecial);
  }

  const EditUser = async () => {
    const user = {
        username: username,
        password: password,
        userspecial: adminRights
    };
    try {
        const res = await axios.put(process.env.REACT_APP_SERVER_URL + '/users/' + id, user);
        NotificationManager.success('Zmieniono użytkownika!', user.username);
        navigate("/przychodnia/adminpanel/Users");
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
        checked={adminRights}
        required
      />
      <br /><br />
      <button className="adminpanel__adduser-submit" onClick={EditUser}>EDIT USER</button>
    </div>
  )
}

export default EditUsers