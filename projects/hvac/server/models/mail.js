const nodemailer = require('nodemailer');
const Form = require('../models/form')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:false,
    port:465,
    auth: {
        user: 'trentdjorgensen@gmail.com',
        pass: 'nightsun33'
    }
  
});

module.exports = transporter;