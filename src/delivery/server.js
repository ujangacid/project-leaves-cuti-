const dotenv = require('dotenv');
const express = require('express');
const config = require('../config/config');


//Route
const noRoute = require('./routes/no.route');
const appRoute = require('../delivery/index');

dotenv.config();

const { port, host } = config();

const Server = () => {
    const app = express();
    app.use(express.json())
    app.use(appRoute);
    app.use(noRoute);
    app.listen(port, host, () => {
        console.info(`App server running on port ${port}`);
    })
}

module.exports = Server;