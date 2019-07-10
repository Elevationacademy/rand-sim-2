const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/rand_sim_2', { useNewUrlParser: true })

const app = express()
const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)

const port = '3000';
app.listen(port, function () { console.log('Running on ' + port) })
