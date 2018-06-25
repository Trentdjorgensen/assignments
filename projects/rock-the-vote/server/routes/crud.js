const express = require('express')
const crudRouter = express.Router()
const Vote = require('../models/vote')

crudRouter.get('/',(req,res) =>{
    Vote.find((err, votes)=>{
        if(err) return res.status(500).send(err)
        return res.status(200).send(votes)
    })
})

crudRouter.get('/:id', (req,res) =>{

})
crudRouter.post('/',(req,res) =>{
    console.log('nnnwnognwoegn')
    const vote = new Vote(req.body)
    vote.save((err, newVote) =>{
        if(err) return res.status(500).send(err)
        return res.status(201).send(newVote)
    })
})
crudRouter.put('/:id',(req,res) =>{
    Vote.findByIdAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        {new:true},
        (err, updatedVote) => {
            if(err) return res.status(500).send(err)
            return res.send(updatedVote)
        })
})
crudRouter.delete('/:id',(req,res)=>{
    Vote.findOneAndRemove({ _id: req.params.id }, (err, deletedVote) =>{
        if(err) return res.status(500).send(err);
        return res.send({message: "Vote was successfully deleted", deletedVote})
    })
})

module.exports = crudRouter