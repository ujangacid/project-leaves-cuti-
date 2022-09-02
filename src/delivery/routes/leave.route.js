const express = require('express');
const router = express.Router();


const LeaveRoute = (leaveController) => {
    const {create,list,get,update,destroy} = leaveController()
    router.post('/',create);
    router.get('/',list);
    router.get('/:id',get);
    router.put('/',update);
    router.delete('/:id',destroy);
    return router
}

module.exports = LeaveRoute;