const express = require('express');
const router = express.Router();

const userActions = require('../actions/users/userActions');

//router.get('/users', userActions.getAllUsers)
router.get('/users/:id', userActions.getUser)
//router.post('/users', userActions.saveUser)
//router.put('/users/:UserId', userActions.updateUser)
//router.delete('/users/:UserId', userActions.deleteUser)

module.exports = router;