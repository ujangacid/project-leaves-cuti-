const LeaveRequestDto=() => {

    const createUpdate = (result,people,leave, i = 0) => {
        return {
            id: result.rows[i].id,
            people: {
                id: people.id,
                name: people.name,
                address: people.address,
                position: people.position,
                nip: people.nip,

            },
            leave: {
                id: leave.id,
                type: leave.type,
                cuti: leave.cuti
            },
            startDate: result.rows[i].start_date,
            endDate: result.rows[i].end_date,
            reason: result.rows[i].reason
        }

    }

    const getList = (result,i) => {
        return {
            id: result.rows[i].id,
            people: {
                id: result.rows[i].people_id,
                name: result.rows[i].name,
                address: result.rows[i].address,
                position: result.rows[i].position,
                nip: result.rows[i].nip,
            },
            leave: {
                id: result.rows[i].leave_id,
                type: result.rows[i].type,
                cuti: result.rows[i].cuti,
            },
            startDate: result.rows[i].start_date,
            endDate: result.rows[i].end_date,
            reason: result.rows[i].reason
        }

    }

    return {
        createUpdate,getList
    }
}

module.exports = LeaveRequestDto