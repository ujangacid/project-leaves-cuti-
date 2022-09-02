const PeopleService = (peopleRepository) => {
    const {add,list,get,update,destroy, getNipandPassword} = peopleRepository

    const create = async (people) => {
        if (people.nip === '' || people.name === '') {
            return `Payload can\'t be empty`;
        }
        return await add(people);
    }

    const findAll = async (name,address,position) => {
        return await list(name,address,position);
    }

    const findById = async (id) => {
        return await get(id);
    }

    const updateData = async (people) => {
        if (people.nip === '' || people.name === '') {
            return `Payload can\'t be empty`;
        }
        return await update(people);
    }

    const deleteData = async (people_id) => {
        return await destroy(people_id);
    }

    const findNipPassword = async (nip,password) => {
        try {
            return await getNipandPassword(nip,password)
        } catch (err) {
            err.message
        }
    }


    return {
        create, findAll, findById, updateData,deleteData,findNipPassword
    }
}

module.exports = PeopleService;