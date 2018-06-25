const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/taskmanager', (err) =>{
    if (err) throw err
    console.log('connect to the database')
})


app.use('/vote',require('./routes/crud'))

app.listen(5000, () => {
    console.log('server is running on port 5000')
})