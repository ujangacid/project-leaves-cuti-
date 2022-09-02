const PeopleDto =() => {
    
    const createUpdate = (result, i =0) => {
        return {
            id: result.rows[i].id,
            name: result.rows[i].name,
            address:result.rows[i].address,
            position: result.rows[i].position,
            nip: result.rows[i].nip,
            password: result.rows[i].password
        }
    }

    const getList = (result, i) => {
        return {
            id: result.rows[i].id,
            name: result.rows[i].name,
            address:result.rows[i].address,
            position: result.rows[i].position,
            nip: result.rows[i].nip
        }
    }

    return {
        createUpdate,getList
    }
}

module.exports = PeopleDto