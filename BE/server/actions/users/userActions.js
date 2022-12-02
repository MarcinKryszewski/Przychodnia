const User = require('../../db/models/userModel');

class UserActions {

    async getUser(req, res) {  
        const id = req.params.UserId;
        const user = await User.findOne({ userID: id});

        res.status(200).json(user);
    }
}

module.exports = new UserActions();