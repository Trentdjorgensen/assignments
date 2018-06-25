const express = require('express')
const backRouter = express.Router()
const Form = require('../models/form')
const transporter = require('../models/mail');

backRouter.get("/",(req,res)=>{
    Form.find((err, forms)=>{
        if(err) return res.status(500).send(err)
        return res.status(201).send(forms)
    }) 
})
backRouter.get("/:id",(req,res)=>{
    Form.findById(req.params.id,(err,Form) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(Form)
    }) 
})

backRouter.post("/",(req, res)=>{
    console.log(req.body)
    
    const mailOptions = {
        from: '"Trent Jorgensen" <trentdjorgensen@gmail.com',
        to: "trentdjorgensen@gmail.com",
        subject: "Sending Email using Node.js",
        text: 
        `Name: ${req.body.name}
        Phone: ${req.body.phone}
        email: ${req.body.email}
        description: ${req.body.description}`
    };

    const newForm = new Form(req.body);
    newForm.save((err, saveForm)=>{
        if(err) return res.status(500).send(err)

        transporter.sendMail(mailOptions, function(err, form){
            if (err) {
                console.log(err);
            } else {
                console.log('Email sent: ' + form.response);
                res.status(201).send(saveForm);
            }
        });

        // return res.status(201).send(saveForm);
    })
})



backRouter.put("/:id", (req,res)=>{
    Form.findByIdAndUpdate(
        {_id: req.params.id },
        req.body,
        {new:true},
        (err, updatedForm) => {
            if(err) return res.status(500).send(err)
            return res.send(updatedForm)
    })
})

backRouter.delete("/:id",(req,res)=>{
    Form.findOneAndRemove({_id: req.params.id },(err, deleteForm)=>{
        if(err) return res.status(500).send(err);
        return res.send({message: "Form was successfully deleted", deleteForm})
    })

})

module.exports = backRouter;