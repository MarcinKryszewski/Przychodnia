const express = require('express');
const router = express.Router();
const userActions = require('../actions/api/users');
const visitActions = require('../actions/api/visits');

//all users
router.get('/users', userActions.AllUsers);
//one user
router.get('/user/:id', userActions.GetUser);
//add user
router.post('/userAdd', userActions.AddUser);
//login user
router.post('/users/login', userActions.LoginUser);
//edit user
router.put('/users/:id', userActions.UpdateUser);
//delete user
router.delete('/users/:id', userActions.DeleteUser);

//all visits
router.get('/visits', visitActions.AllVisits);
//one visit
router.get('/visit/:id', visitActions.GeVisit);
// add visit
router.post('/visitAdd', visitActions.AddVisit);
//get visit
router.get('/visits/:userid', visitActions.GetUserVisits);
//edit visit
router.put('/visits/:id', visitActions.UpdateVisit);
//delete visit
router.delete('/visits/:id', visitActions.DeleteVisit);

module.exports = router;