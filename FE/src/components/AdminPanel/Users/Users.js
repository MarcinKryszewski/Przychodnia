import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Users.css';
import { Link, useNavigate, redirect } from "react-router-dom";
import axios from 'axios';


function Users () {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const usersList = async () => {
    const res = await axios.get("http://localhost:3001/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    usersList();    
  }, []);

  const AddUserHandler = async () => {
    console.log("aaaaaa");
    navigate("/przychodnia/adminpanel/Users/Add");
  }
  
  return (
    <div className='adminPanel__users_user' >
      <table id="adminPanel__users_table">
      <colgroup>
        <col className='adminPanel__users_username' />
        <col className='adminPanel__users_password' />
        <col className='adminPanel__users_userspecial' />
        <col className='adminPanel__users_actions' />
      </colgroup>
      <thead>
        <tr>
          <th >USERNAME</th>
          <th >PASSWORD</th>
          <th >ADMIN</th>
          <th >ACTIONS</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user =>(
        <Fragment key={user.id}>
          <tr>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.userspecial.toString()}</td>
            <td><button>MANAGE</button>
            <button>DELETE</button></td>
          </tr>
        </Fragment>
      ))}
      </tbody>
      </table>
      <button className='p__opensans adminPanel__users_adduser' onClick={AddUserHandler} >NEW USER</button>
    </div>
  )
}

export default Users


/*
{users.map(user =>(
        <Fragment key={user.id}>
          <tr>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.userspecial.toString()}</td>
            <td><button>MANAGE</button>
            <button>DELETE</button></td>
          </tr>
        </Fragment>
      ))}
*/