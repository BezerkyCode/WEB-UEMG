const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const conexaoDB = require('./server/database/connection.js')

const app = express()

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({ extended: true }))

app.set('views', path.resolve())

conexaoDB

app.use('/', require('./server/routes/router'))

const PORT = 8080

app.listen(8080, () => { console.log(`Server running on http://localhost:${PORT}`) })