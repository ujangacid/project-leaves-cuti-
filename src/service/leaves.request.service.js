const LeavesRequestService = (leavesRequestRepository) => {
    const {add,list,destroy} = leavesRequestRepository;

    const create = async (newLrequest) => {
        if (newLrequest.people_id === '' || newLrequest.leave_id === '') {
            return `Payload can\'t be empty`;
        }
        return await add(newLrequest);
    }

    const findAll = async (nip) => {
        
        return await list(nip);
    }

    const deleteData = async (id) => {
        return await destroy(id);
    }

    return {
        create,findAll,deleteData
    }
}

module.exports = LeavesRequestService