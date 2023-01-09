const express = require('express');
const router = express.Router();
const userActions = require('../actions/api/users');
const visitActions = require('../actions/api/visits');

// pobieranie użytkownika
// pobieranie wizyty dla użytkownika

//all users
router.post('/users', userActions.allUsers);
//add user
router.post('/userAdd', userActions.addUser);
//get user
router.post('/users/login', userActions.getUser);
//delete user
router.delete('/visits/:id', userActions.deleteUser);

//all visits
router.post('/visits', visitActions.allVisits);
// save visit
router.post('/visit', visitActions.addVisit);
//get visit
router.get('/visits/:userid', visitActions.getVisit);
//edit visit
router.put('/visits/:id', visitActions.updateVisit);
//delete visit
router.delete('/visits/:id', visitActions.deleteVisit);

module.exports = router;