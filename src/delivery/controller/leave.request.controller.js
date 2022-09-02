const Response = require("../../utils/response");

const LeaveRequestController =() => {

    const create = async (req,res) => {
        try {
            const payload = req.body;
            const newLrequest = await req.service.create(payload);
            res.json(Response().successMessage(res.statusCode,'Success',newLrequest));
        } catch (err) {
            const payload = req.body
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const list =  async(req,res) => {
        try {
            const {nip} = req.query;
            const leaveR = await req.service.findAll(nip);
            res.json(Response().successMessage(res.statusCode,'Success',leaveR));
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const destroy = async (req,res) => {
        const people_id = req.params.id
        try {
            const leaveR = await req.service.deleteData(+people_id);
            // console.log(leave);
            res.json(Response().successMessage(res.statusCode,'Success',leaveR));
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    return {
        create,list,destroy
    }
}

module.exports = LeaveRequestController