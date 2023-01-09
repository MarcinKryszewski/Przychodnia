const Visit = require('../../db/models/visit');

class VisitActions {

    async allVisits(req, res) {
        const visit = await Visit.find({});
        res.status(200).json(visit);
    }

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

    async getVisit(req, res) {
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