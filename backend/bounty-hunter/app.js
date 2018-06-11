const express = require('express');
const app = express();
const bodyParser = require('express');
const uuidv1 = require('uuid/v1');
uuidv1();

app.use(bodyParser.json());

const bounties = [  {firstName: 'luke',lastName:'skywalker',living: true,bountyAmount: 500, type:'jedi', id:1},
                    {firstName: 'minch',lastName:'yoda',living: true,bountyAmount: 1000, type:'jedi', id:2},
                    {firstName: 'darth',lastName:'vador',living: true,bountyAmount: 400, type:'sith', id:3},
                    {firstName: 'obi-wan',lastName:'kenobi',living: false,bountyAmount: 0, type:'jedi', id:4},
                    {firstName: 'sheev',lastName:'palpatine',living: true,bountyAmount: 800, type:'sith', id:5}
]



app.get('/bounties',(req, res) => { 
    res.send(bounties);
})

app.get('/bounties/:id', (req,res)=>{
    console.log(req.params);
    const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id));
    res.send(foundBounty);
})

app.post('/bounties',(req, res) =>{
    const newBounties = uuidv1;
    newBounties.id = uuidv1;
    bounties.push(req.body);
    res.send(req.body);
});

app.put('/bounties/:id',(req,res) =>{
    const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id));
    const newBounties = req.body
    bounties.splice(bounties[bounties.indexOf(foundBounty)],1,)
    res.send(foundBounty.id);
})

app.delete('/bounties/:id', (req,res)=>{
    const deleteBounties = bounties.find(bounty => bounty.id === parseInt(req.params.id));
    bounties.splice(bounties.indexOf(deleteBounties),1)
    res.send(deleteBounties.id);
})


app.listen(8000, () => {
    console.log('server is running on port 8000');
});

