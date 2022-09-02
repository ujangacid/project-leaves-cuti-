
//People 
const createPeople = `insert into people (name,address,position,nip,password) values ($1,$2,$3,$4,$5) returning *`
const listPeople = `select id,name,address,position,nip from people order by id asc`
const getPeopleById = `select id,name,address,position,nip from people where id =$1`
const getPeopleByNip = `select nip,password from people where nip=$1`
const updatePeople = `update people set name=$1,address=$2,position=$3,nip=$4,password=$5 where id=$6 returning *`
const deletePeople = `delete from people where id=$1`
const searchPeople = `select name,address,position,nip from people where name ilike $1 and address ilike $2 and position ilike $3`

//Leave
const createLeave = `insert into leave (type,cuti) values ($1,$2) returning *`
const listLeave = `select * from leave order by id`
const getLeaveByName = `select type,cuti from leave where cuti =$1`
const getLeaveById = `select type,cuti from leave where id=$1`
const getLeaveByType = `select type,cuti from leave where type = $1`
const updateLeave = `update leave set type=$1, cuti=$2 where id=$3 returning *`
const deleteLeave = `delete from leave where id=$1`
const searchLeave = `select type,cuti from leave where type ilike $1 and cuti ilike $2`

//Leave Request
const createLrequest = `insert into leave_request (people_id,leave_id,start_date,end_date,reason) values ($1,$2,$3,$4,$5) returning *`
const listLrequest = `SELECT lr.id,lr.people_id,lr.leave_id,lr.start_date,lr.end_date,lr.reason,p.id,p.name,p.address,p.position,p.nip,l.id,l.type,l.cuti
                    from leave_request lr
                    JOIN people p ON lr.people_id = p.id
                    JOIN leave l ON lr.leave_id = l.id 
                    ORDER BY lr.id`
const searchLeaveReq = `SELECT lr.id,lr.people_id,lr.leave_id,lr.start_date,lr.end_date,lr.reason,p.id,p.name,p.address,p.position,p.nip,l.id,l.type,l.cuti
                        from leave_request lr
                        JOIN people p ON lr.people_id = p.id
                        JOIN leave l ON lr.leave_id = l.id
                        where p.nip ilike $1
                        ORDER BY lr.id`
const updateLrequest = `update leave_request set people_id=$1,leave_id=$2, start_date =$3, end_date = $4 where id=$5 returning *`
const deleteLrequest = `delete from leave_request where people_id=$1`
const searchRequestByDate = `select * from leave_request where start_date beetween $1 and $2`



module.exports = {
    createPeople,listPeople,getPeopleById,getPeopleByNip,updatePeople,deletePeople,searchPeople,
    createLeave,listLeave,getLeaveByName,getLeaveByType,updateLeave,deleteLeave,getLeaveById,searchLeave,
    createLrequest,listLrequest,searchLeaveReq,updateLrequest,deleteLrequest,searchRequestByDate
}