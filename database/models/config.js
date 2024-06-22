require('dotenv').config()

const { Pool } = require('pg')
const {LOCALHOST, POSTGRES, ISABELLA, POSTGRES} = process.env

const poll = new Pool({
    host: LOCALHOST,
    user: POSTGRES,
    password: ISABELLA,
    database: POSTGRES,
    port: 5422,
    allowExitOnIdle: true
})
module.exports = pool