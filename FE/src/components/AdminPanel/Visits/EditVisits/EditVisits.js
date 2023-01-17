import React, { useState, useEffect } from 'react'
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditVisits () {

  const [username, setUsername] = useState('');
  const [visitName, setVisitName] = useState('');
  const [users, setUsers] = useState([]);
  const [userid, setUserId] = useState('');
  const { id } = useParams();

  const navigate = useNavigate();

  const UsersList = async () => {
    const res = await axios.get("http://localhost:3001/api/users");
    setUsers(res.data);
    GetVisit();
  };

  useEffect(() => {
    UsersList();    
  }, []);

  const changeUsername = event => {
    const value = event.target.value;
    const text = event.target.options[event.target.selectedIndex].text
    setUsername(text);    
    setUserId(value);
  };

  const changeVisitName = event => {
    const value = event.target.value;
    setVisitName(value);
  };

  const GetVisit = async () => {
    const visit = await (await axios.get('http://localhost:3001/api/visit/' + id)).data;
    setVisitName(visit[0].visitname);
    setUsername(visit[0].user[0].username);
    setUserId(visit[0].user[0]._id);
  }

  const EditVisit = async () => {
    const visit = {
        username: username,
        visitname: visitName,
        userid: userid
    };
    try {
        const res = await axios.put('http://localhost:3001/api/visits/' + id, visit);
        //const newNote = res.data;
        NotificationManager.success('Zmieniono wizytę!', visit.visitname);
        navigate("/przychodnia/adminpanel/Visits");
        console.log("EDIT");
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
      <button className="adminpanel__adduser-submit" onClick={EditVisit}>EDIT VISIT</button>
    </div>
  )
}

export default EditVisits

/*
key={users._id}
*/