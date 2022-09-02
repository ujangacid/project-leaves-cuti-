 const {createLeave,listLeave,getLeaveByName,getLeaveByType,updateLeave,deleteLeave,getLeaveById,searchLeave} = require('../config/db.query');

 const LeaveDto = require('../delivery/models/dto/leave.dto')
 const LeaveRepository = (db) => {
    
    const isLeaveExist = async (cuti) => {
        const result = await db.query(getLeaveByName, [cuti]);
        if (result.rows.length > 0) {
            return `Leave with ${cuti} already exist`;
        }
    }
    
    const add = async (newLeave) => {
        // console.log('ini repo');
        try {
            const err = await isLeaveExist(newLeave.cuti);
            if (err) {
                return err;
            }
            const result = await db.query(createLeave,[newLeave.type,newLeave.cuti]);
            return LeaveDto().createUpdate(result,0);
        } catch (err) {
            return err.message
        }
    }

    const list = async (type='',cuti='') => {
        try {
            leave = [];
            if (type || cuti) {
                const result = await db.query(searchLeave,[`%${type}%`,`%${cuti}%`]);
                if (result.rows.length === 0) {
                    return `Data not found`
                }
                for (let i = 0; i < result.rows.length; i++) {
                    leave.push(LeaveDto().getList(result,i))
                }
                return leave
            }
            const result = await db.query(listLeave);
            for (let i = 0; i < result.rows.length; i++) {
                leave.push(LeaveDto().getList(result,i)) 
            }
            return leave;
        } catch (err) {
            return err.message
        }
    }

    const get = async (id) => {
        try {
            const result = await db.query(getLeaveById,[id]);
            if (result.rows.length === 0) {
                return `Leave with id ${id} not found`
            } else {
                return LeaveDto().getList(result,0);
            }
        } catch (err) {
            return err.message
        }
    }

    const update = async (newLeave) => {
        try {
            const result = await db.query(updateLeave,[newLeave.type,newLeave.cuti,newLeave.id]);
            console.log(result);
            return LeaveDto().createUpdate(result,0);
        } catch (err) {
            return err.message
        }
    }

    const destroy = async (id) => {
        try {
            const result = await db.query(deleteLeave,[id]);
            if (result.rows.length === 0) {
                return `Id ${id} not found`
            }
            return `Leave with ID ${id} deleted`
        } catch (err) {
            return err.message
        }
    }

    return {
        add, list,get,update,destroy
    }
 }

 module.exports = LeaveRepository;