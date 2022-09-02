const express = require('express')
const db = require('../config/db')

//Leave
const LeaveRepository = require('../repository/leave.repository')
const LeaveService = require('../service/leave.service')
const LeaveController = require('./controller/leave.controller')
const LeaveRoute = require('./routes/leave.route')


// people 
const PeopleRepository = require('../repository/people.repository')
const PeopleService = require('../service/people.service')
const PeopleController = require('./controller/people.controller')
const PeopleRoute = require('./routes/people.route')

//leave request
const LeaveRequestRepository = require('../repository/leave.request.repository')
const LeavesRequestService = require('../service/leaves.request.service')
const LeaveRequestController = require('./controller/leave.request.controller')
const LeaveRequestRoute = require('./routes/leave.request.route')


//auth
const AuthenticationController = require('./controller/authentication.controller')
const AuthenticationService = require('../service/authentication.service')
const AuthRoute = require('./routes/auth.route')

const router = express.Router()

const peopleService = (req,res,next) => {
    // console.log('this is people route');
    req.service = PeopleService(PeopleRepository(db));
    next()
}
router.use('/people',peopleService,PeopleRoute(PeopleController))

const leaveService = (req,res,next) => {
    req.service = LeaveService(LeaveRepository(db));
    next()
}
router.use('/leave',leaveService,LeaveRoute(LeaveController))

const leaveRequestService = (req,res,next) => {
    req.service = LeavesRequestService(LeaveRequestRepository(db));
    next()
}
router.use('/leave-request',leaveRequestService,LeaveRequestRoute(LeaveRequestController))


const authService = (req,res,next) => {
    req.service = AuthenticationService(PeopleService(PeopleRepository(db)))
    next()
}
router.use('/auth',authService,AuthRoute(AuthenticationController))

module.exports=router