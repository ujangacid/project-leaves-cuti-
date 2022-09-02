const Response = require("../../utils/response");

const LeaveController = () => {

    const create = async (req,res) => {
        try {
            const payload = req.body;
            const newLeave = await req.service.create(payload);
            res.json(Response().successMessage(res.statusCode,'Success',newLeave));
        } catch (err) {
            const payload = req.body
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const list =  async(req,res) => {
        try {
            const {type,cuti} = req.query;
            // console.log(type);
            const leave = await req.service.findAll(type,cuti);
            // console.log(people);
            res.json(Response().successMessage(res.statusCode,'Success',leave));
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const get = async (req,res) => {
        const id = req.params.id
        try {
            const leave = await req.service.findByType(+id);
            res.json(Response().successMessage(res.statusCode,'Success',leave));
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const update = async (req,res) => {
        try {
            const payload = req.body;
            const newLeave = await req.service.updateData(payload);
            if (!newLeave) {
                res.json(Response().errorMessage('XX',err.message));
            } else {
                res.json(Response().successMessage(res.statusCode,'Success',newLeave));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const destroy = async (req,res) => {
        const id = req.params.id
        // console.log(id);
        try {
            const leave = await req.service.deleteData(+id);
            // console.log(leave);
            res.json(Response().successMessage(res.statusCode,'Success',leave));
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    return {
        create,list,get,update,destroy
    }
}

module.exports = LeaveController;