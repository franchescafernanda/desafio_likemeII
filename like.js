require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./Routes/like')

const {PORT} = process.env

app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(PORT, console.log("SERVIDOR CONECTADO"))
