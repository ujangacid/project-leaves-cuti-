const {Pool} = require('pg')
const config = require('./config')

const {dbhost, dbport, dbuser, dbpassword, dbname, dbdriver} = config();
const connectionString = `${dbdriver}://${dbuser}:${dbpassword}@${dbhost}:${dbport}/${dbname}`

const db = new Pool({
    connectionString,
})
// console.log(db);

module.exports = db;