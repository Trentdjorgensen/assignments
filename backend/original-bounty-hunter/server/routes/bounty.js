const express = require('express');
const bountyRouter = express.Router()
const Bounty = require('../models/bounty');



bountyRouter.get('/',(req, res) => { 
    Bounty.find((err, bounties) => {
        if(err) return res.status(500).send(err);
        return res.send(bounties);
    })
})

bountyRouter.get('/:id', (req,res)=>{
    console.log(req.params);
    const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id));
    res.send(foundBounty);
})

bountyRouter.post('/',(req, res) =>{
   const newBounty = new Bounty(req.body);
    newBounty.save((err, savedBounty) => {
        if(err) return res.status(500).send(err);
        return res.status(201).send(savedBounty);
    });
});

bountyRouter.put('/:id',(req,res) =>{
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updateBounty)=>{
        if(err) return res.status(500).send(err);
        return res.send(updateBounty);
    });
})

bountyRouter.delete('/:id', (req,res)=>{
    const deleteBounties = bounties.find(bounty =>  bounty.id === parseInt(req.params.id));
    bounties.splice(bounties.indexOf(deleteBounties),1)
    res.send(deleteBounties.id);
})

module.exports = bountyRouter;