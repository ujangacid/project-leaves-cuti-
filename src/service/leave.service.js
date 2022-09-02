const LeaveService = (leaveRepository) => {
    const {add, list,get,update,destroy} = leaveRepository

    const create = async (leave) => {
        if (leave.type === '' || leave.cuti === '') {
            return `Payload can\'t be empty`;
        }
        return await add(leave);
    }

    const findAll = async (type,cuti) => {
        return await list(type,cuti);
    }

    const findById = async (id) => {
        return await get(id);
    }

    const updateData = async (leave) => {
        if (leave.type === '' || leave.cuti === '') {
            return `Payload can\'t be empty`;
        }
        return await update(leave);
    }

    const deleteData = async (id) => {
        return await destroy(id);
    }


    return {
        create, findAll, findById, updateData,deleteData
    }
}

module.exports = LeaveService;