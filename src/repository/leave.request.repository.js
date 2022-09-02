const Db = require('../config/db');
const {createLrequest,listLrequest,searchLeaveReq,deleteLrequest} = require('../config/db.query');
const LeaveRequestDto = require('../delivery/models/dto/leave.request.dto');
const LeaveService = require('../service/leave.service');
const PeopleService = require('../service/people.service');
const LeaveRepository = require('./leave.repository');
const PeopleRepository = require('./people.repository');

const LeaveRequestRepository = (db) => {

    const isPeopleExist= async(id) => {
        const peopleService = PeopleService(PeopleRepository(Db))
        return await peopleService.findById(id)
    }

    const isLeaveExist= async(id) => {
        const leaveService = LeaveService(LeaveRepository(Db))
        return await leaveService.findById(id)
    }


    const add = async(newLrequest) => {
        try {
            const result = await db.query(createLrequest,[newLrequest.people_id,newLrequest.leave_id,newLrequest.start_date,newLrequest.end_date,newLrequest.reason]);
            const people = await isPeopleExist(result.rows[0].people_id);
            const leave = await isLeaveExist(result.rows[0].leave_id);
            if (people && leave) {
                return LeaveRequestDto().createUpdate(result,people,leave)
            }
        } catch (err) {
            return err.message;
        }
    }

    const list = async(nip='') => {
        try {
                const leaves=[];
            if (nip) {
                const result = await db.query(searchLeaveReq,[`%${nip}%`]);
                if (result.rows.length === 0) {
                    return `Data not found`
                }
                for (let i = 0; i < result.rows.length; i++) {
                    leaves.push(LeaveRequestDto().getList(result,i))                   
                }
                return leaves;
                }
            const result = await db.query(listLrequest);
            // console.log(result.rows);
            for (let i = 0; i < result.rows.length; i++) {
                leaves.push(LeaveRequestDto().getList(result,i))
            }
            return leaves
        } catch (err) {
            return err.message;
        }
    }

    const destroy = async (people_id) => {
        try {
            const result = await db.query(deleteLrequest,[people_id]);
            console.log(result.rows);
            // if (result.rows.length == 0) {
            //     return `Id ${people_id} not found`
            // }
            return `Leave with ID ${people_id} deleted`
        } catch (err) {
            return err.message
        }
    }

    return {
        add,list,destroy
    }
}

module.exports = LeaveRequestRepository