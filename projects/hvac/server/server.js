const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/taskmanager', (err)=>{
    if (err) throw err
    console.log('connect to database')
})

app.use('/form', require('./routes/back'))

app.listen(6000, () =>{
    console.log('server is running on port 6000')
});