const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');


const LeaveRequestRoute = (leaveRequestController) => {
    const {create,list,destroy} = leaveRequestController()
    router.post('/',authMiddleware,create);
    router.get('/',authMiddleware,list);
    router.delete('/:id',authMiddleware,destroy);
    return router
}

module.exports = LeaveRequestRoute;