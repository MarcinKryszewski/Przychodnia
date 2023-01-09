const mongoose = require('mongoose');

const User = mongoose.model('users', {
    username: String,
    password: String,
    userspecial: Boolean
});

module.exports = User;