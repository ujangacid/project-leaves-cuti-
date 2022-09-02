const Response = require("../../utils/response");

const PeopleController = () => {

    const create = async (req,res) => {
        try {
            const payload = req.body;
            const newPeople = await req.service.create(payload)
            res.json(Response().successMessage(res.statusCode,'Success',newPeople));
        } catch (err) {
            const payload = req.body
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const list =  async(req,res) => {
        try {
            const {name,address,position} = req.query;
            const people = await req.service.findAll(name,address,position); 
            res.json(Response().successMessage(res.statusCode,'Success',people));
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const get = async (req,res) => {
        const id = req.params.id
        try {
            const people = await req.service.findById(id);
            res.json(Response().successMessage(res.statusCode,'Success',people));
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const update = async (req,res) => {
        try {
            const payload = req.body;
            const newPeople = await req.service.updateData(payload);
            console.log(newPeople);
            if (!newPeople) {
                res.json(Response().errorMessage('XX',err.message));
            } else {
                res.json(Response().successMessage(res.statusCode,'Success',newPeople));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    const destroy = async (req,res) => {
        const id = req.params.id
        try {
            const people = await req.service.deleteData(id);
            res.json(Response().successMessage(res.statusCode,'Success',people));
        } catch (err) {
            res.json(Response().errorMessage('XX',err.message));
        }
    }

    return {
        create,list,get,update,destroy
    }
}

module.exports = PeopleController