const User = require('../../db/models/user');

class UserActions {

    async allUsers(req, res) {
        const user = await User.find({});
        res.status(200).json(user);
    }

    async addUser(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const userspecial = req.body.userspecial;

        if (await User.findOne({ "username": username }) == null) {    
            const user = new User({
                username: username,
                password: password,
                userspecial: userspecial
            })        
            await user.save();
            res.status(200).json(user);
        } else {
            res.status(409).json("Nazwa użytkownika zajęta!");
        }
    }

    async getUser(req, res) {
        const username = req.body.username;
        const password = req.body.password;        
        const user = await User.findOne({username: username});
        try{
            if (user.password == password) {
                const userspecial = user.userspecial;;
                userspecial ? 
                res.status(222).json(user.id) :
                res.status(200).json(user.id);
            } else {
                res.status(403).json("Błędny login lub hasło");
            }
        } catch {res.status(403).json("Błędny login lub hasło");}
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        res.sendStatus(204);
    }
}

module.exports = new UserActions();