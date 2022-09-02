const {createPeople,listPeople,getPeopleById,getPeopleByNip,updatePeople,deletePeople,searchPeople} = require('../config/db.query');
const {passwordUtil, passwordCompare} =require('../utils/password.utils')

const PeopleDto = require('../delivery/models/dto/people.dto')

const PeopleRepository =  (db) => {

    const isPeopleExists = async (nip) => {
        const result = await db.query(getPeopleByNip, [nip]);
        if (result.rows.length > 0) {
            return `People with Nip ${nip} already exist`;
        }
    }
    
    const add = async (newPeople) => {
        try {
            // const password = await passwordUtil(payload.password)
            const err = await isPeopleExists(newPeople.nip);
            if (err) {
                return err;
            }
            const result = await db.query(createPeople,[newPeople.name,newPeople.address,newPeople.position,newPeople.nip,newPeople.password]);
            return PeopleDto().createUpdate(result,0);
        } catch (err) {
            return err.message
        }
    }

    const list = async (name='',address='',position='') => {
        try {
            const peopleArr = [];
            if (name || address || position) {
                const result = await db.query(searchPeople, [`%${name}%`,`%${address}%`,`%${position}%`]);
                if (result.rows.length === 0) {
                    return `Data not found`
                }
                for (let i = 0; i < result.rows.length; i++) {
                    peopleArr.push(PeopleDto().getList(result,i))
                }
                return peopleArr;
            }
            const result = await db.query(listPeople);
            for (let i = 0; i < result.rows.length; i++) {
                peopleArr.push(PeopleDto().getList(result,i)) 
            }
            return peopleArr;
        } catch (err) {
            return err.message
        }
    }

    const get = async (id) => {
        try {
            const result = await db.query(getPeopleById,[id]);
            if (result.rows.length === 0) {
                return `People with ID ${id} not found`
            } else {
                return PeopleDto().getList(result,0);
            }
        } catch (err) {
            return err.message
        }
    }

    const update = async (newPeople) => {
        try {
            const result = await db.query(updatePeople,[newPeople.name,newPeople.address,newPeople.position,newPeople.nip,newPeople.password,newPeople.id]);
            console.log(result);
            return PeopleDto().createUpdate(result,0);
        } catch (err) {
            return err.message
        }
    }

    const destroy = async (id) => {
        try {
            const result = await db.query(deletePeople,[id]);
            if (result.rows.length === 0) {
                return `Id ${id} not found`
            }
            return `People with ID ${id} deleted`
        } catch (err) {
            return err.message
        }
    }

    const getNipandPassword = async (nip,password) => {
        try {
            const result = await db.query(getPeopleByNip,[nip]);
            if (result.rows.length === 0) {
                return null
            }
            const validPassword = await passwordCompare(password,result.rows[0].password);
            console.log(validPassword);
            if (!validPassword) {
                return null
            }
            return getPeopleById(result.rows[0].id)
        } catch (err) {
            return err.message
        }
    }

    return {
        add, list,get,update,destroy,getNipandPassword
    }

}

module.exports = PeopleRepository;