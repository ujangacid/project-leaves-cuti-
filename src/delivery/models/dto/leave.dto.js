const LeaveDto =() => {
    
    const createUpdate = (result, i =0) => {
        return {
            id: result.rows[i].id,
            type: result.rows[i].type,
            cuti: result.rows[i].cuti
        }
    }

    const getList = (result, i) => {
        return {
            id: result.rows[i].id,
            type: result.rows[i].type,
            cuti: result.rows[i].cuti
        }
    }

    return {
        createUpdate,getList
    }
}

module.exports = LeaveDto