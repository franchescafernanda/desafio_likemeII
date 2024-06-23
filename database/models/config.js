require('dotenv').config()

const { Pool } = require('pg')
const {LOCALHOST, POSTGRES, ISABELLA, POSTGRES} = process.env

const pool = new Pool({
    host: LOCALHOST,
    user: POSTGRES,
    password: ISABELLA,
    database: POSTGRES,
    port: 5422, //tengo errores con el port
    allowExitOnIdle: true
})
module.exports = pool