import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { NotificationManager } from 'react-notifications';

function Visits() {

  const [visitList, setVisitList] = useState([]);
  const navigate = useNavigate();
  
  const GetVisits = async () => {
    const res = await axios.get("http://localhost:3001/api/visits");
    setVisitList(res.data);
  };

  useEffect(() => {
    GetVisits();
    
  }, []);

  const AddVisitHandler = async () => {
    navigate("/przychodnia/adminpanel/Visits/Add");
  }

  const EditVisitHandler = (v) =>{
    navigate("/przychodnia/adminpanel/Visits/Edit/" + v._id);
  }

  const DeleteHandler = async (v) => {
    const res = await axios.delete("http://localhost:3001/api/visits/" + v._id);
    if (res.status === 204) {
      NotificationManager.success(v.visitname, 'Usnięto wizytę!');
    } else {

    }   
    GetVisits();
  }

    return (
      <div className='adminPanel__users_user' >
      <table id="adminPanel__users_table">
      <colgroup>
        <col className='adminPanel__users_username' />
        <col className='adminPanel__users_visitname' />
        <col className='adminPanel__users_actions' />
      </colgroup>
      <thead>
        <tr>
          <th >USERNAME</th>
          <th >VISITNAME</th>
          <th >ACTIONS</th>
        </tr>
        </thead>
        <tbody>
        {visitList.map(visit =>(
        <Fragment key={visit._id}>
          <tr>
            {visit.user.map(user =>(<td key={user._id}>{user.username}</td>))}
            <td>{visit.visitname}</td>
            <td><button onClick={() => EditVisitHandler(visit)}>MANAGE</button>
            <button onClick={() => DeleteHandler(visit)} >DELETE</button></td>
          </tr>
        </Fragment>
      ))}
      </tbody>
      </table>
      <button className='p__opensans adminPanel__users_adduser' onClick={AddVisitHandler} >NEW VISIT</button>
    </div>
    )
}

export default Visits

//