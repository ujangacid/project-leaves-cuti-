const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

const PeopleRoute = (peopleController) => {
    const {create,list,get,update,destroy} = peopleController()
    router.post('/',create);
    router.get('/',authMiddleware, list);
    router.get('/:id', authMiddleware,get);
    router.put('/',authMiddleware,update);
    router.delete('/:id',authMiddleware,destroy);
    return router
}

module.exports = PeopleRoute;