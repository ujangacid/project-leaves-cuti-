const dotenv = require('dotenv')

dotenv.config();

// console.log(dotenv.config());

const config = () => {
    return {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT,
        dbhost: process.env.DB_HOST,
        dbport: process.env.DB_PORT,
        dbuser: process.env.DB_USER,
        dbpassword: process.env.DB_PASSWORD,
        dbname: process.env.DB_NAME,
        dbdriver: process.env.DB_DRIVER
    }

}

module.exports = config