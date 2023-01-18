import React, { useState, useEffect } from 'react'
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

function AddVisits () {

  const [username, setusername] = useState('');
  const [visitName, setVisitName] = useState('');
  const [users, setUsers] = useState([]);
  const [userid, setUserId] = useState('');

  const navigate = useNavigate();

  const usersList = async () => {
    const res = await axios.get(process.env.REACT_APP_SERVER_URL + "/users");
    setUsers(res.data);
    setusername(res.data[0].username);
    setUserId(res.data[0]._id);
  };

  useEffect(() => {
    usersList();
  }, []);

  const changeUsername = event => {
    const value = event.target.value;
    const text = event.target.options[event.target.selectedIndex].text
    setusername(text);    
    setUserId(value);
  };

  const changeVisitName = event => {
    const value = event.target.value;
    setVisitName(value);
  };

  const addVisit = async () => {
    const visit = {
        username: username,
        visitname: visitName,
        userid: userid
    };
    try {
        const res = await axios.post(process.env.REACT_APP_SERVER_URL + '/visitAdd', visit);
        //const newNote = res.data;
        NotificationManager.success('Stworzono wizytę!', visit.visitname);
        navigate("/przychodnia/adminpanel/Visits");
    } catch (error) {
      NotificationManager.error(error.response.data);
    }
  };

  return (
    <div>
      <div>Username: </div>
      <select 
        id="username" 
        className="adminpanel__adduser-login" 
        name="login" 
        onChange={changeUsername}
        value={userid}
      >
        {users.map(user =>(<option key={user._id} value={user._id}>{user.username}</option>))}
      </select>
        
      <div>Visit name: </div>
      <input 
        type="text" 
        id="visitname" 
        className="adminpanel__adduser-password" 
        name="login" 
        placeholder="VISIT NAME" 
        onChange={changeVisitName}
        value={visitName}
        required
      />
      
      <br /><br />
      <button className="adminpanel__adduser-submit" onClick={addVisit}>ADD VISIT</button>
    </div>
  )
}

export default AddVisits

/*
key={users._id}
*/