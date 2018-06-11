const express = require('express');
const bodyParser = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/bounty-finder', (err) =>{
    if(err) throw err;
    console.log('connected to the database');
})

app.use('/bounty', require('./routes/bounty'));

app.listen(8000, () => {
    console.log('server is running on port 8000');
});





