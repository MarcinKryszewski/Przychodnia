import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Users.css';
import { Link, useNavigate, redirect } from "react-router-dom";


function Users () {

  const navigate = useNavigate();
  const testUsers = [
    {
      id: 1,
      username: "user1",
      password: "user",
      userspecial: false
    },
    {
      id: 2,
      username: "admin",
      password: "admin",
      userspecial: true
    },
    {
      id: 3,
      username: "user2",
      password: "user",
      userspecial: true
    }
  ];

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
      {testUsers.map(user =>(
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