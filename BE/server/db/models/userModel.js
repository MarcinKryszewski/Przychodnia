const mongoose = require('mongoose');

const User = mongoose.model('User', {
    UserID: Number,
    Username: String,
    Password: String
});

module.exports = User;