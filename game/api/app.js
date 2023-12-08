/**
 * Rest API main code.
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
require('module-alias/register')
require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
const port = parseInt(process.env.API_PORT || '3000')

app
    .use(express.json())
    .use(cors())

require('@handlers/routeHandler')(app)

app.listen(port, _ => {
    require('@database').initDatabase()
    console.log(`Listening on : http://localhost:${port}/`)
})
