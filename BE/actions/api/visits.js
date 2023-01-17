const Visit = require('../../db/models/visit');
const User = require('../../db/models/user');
const { ObjectId } = require('mongodb');

class VisitActions {

    async AllVisits(req, res) {
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
                }}])
        res.status(200).json(userVisit);
    }

    async GeVisit(req, res) {
        const id = ObjectId(req.params.id);
        const visit = await Visit.aggregate([
            {
                $match:
                {
                    _id: id
                }
            },
            {
                $lookup:
                {
                    from: "users",
                    localField: "userid",
                    foreignField: "_id",
                    as: "user"
                }
                
            }]);
        res.status(200).json(visit);
    }

    async AddVisit(req, res) {
        const userid = ObjectId(req.body.userid);
        const visitname = req.body.visitname;
        const visit = new Visit({
            userid: userid,
            visitname: visitname
        })
        await visit.save();
        res.status(200).json(visit);
    }

    async GetUserVisits(req, res) {
        const userId = req.params.userid;
        const visit = await Visit.find({userid: userId});
        res.status(200).json(visit);
    }

    async UpdateVisit(req, res) {
        const id = ObjectId(req.params.id);
        const userid = ObjectId(req.body.userid);
        const visitname = req.body.visitname;

        const visit = await Visit.findOne({ _id: id });
        visit.userid = userid;
        visit.visitname = visitname;
        await visit.save();

        res.status(201).json(visit);
    }

    async DeleteVisit(req, res) {
        const id = req.params.id;
        await Visit.deleteOne({ _id: id });
        res.sendStatus(204);
    }
}

module.exports = new VisitActions();