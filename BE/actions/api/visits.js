const Visit = require('../../db/models/visit');
const User = require('../../db/models/user');
const { default: alasql } = require('alasql');

class VisitActions {

    async allVisits(req, res) {
        const visit = await Visit.find({});
        const user = await User.find({});
        const userVisit = await Visit.aggregate([
            {
                $lookup:
                {
                    from: "users",
                    localField: "userid",
                    foreignField: "_id",
                    as: "user"
                }
            }
        ])
        //var visitUser = alasql('SELECT * FROM ? LEFT JOIN ? ON user._id = visit.userid', [visit, user]);
        //console.log(visitUser);
        res.status(200).json(userVisit);
    }

    //user.username, visit.visitname

    async addVisit(req, res) {
        const userid = req.body.userid;
        const visitname = req.body.visitname;

        const visit = new Visit({
            userid: userid,
            visitname: visitname
        })
        await visit.save();
        res.status(200).json(visit);
    }

    async getUserVisits(req, res) {
        const userId = req.params.userid;
        const visit = await Visit.find({userid: userId});
        res.status(200).json(visit);
    }

    updateVisit(req, res) {
        res.send('..');
    }

    deleteVisit(req, res) {
        const id = req.params.id;
        res.send('delete: ' + id);
    }
}

module.exports = new VisitActions();