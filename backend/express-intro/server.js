const express = require('express');
const app = express();
const bodyParser = require('express');
const uuidv1 = require('uuid/v1');
uuidv1();

app.use(bodyParser.json()); //How you Apply Middleware


const dogs = [{name: 'Mr. Sniffles', type: 'Bloodhound',age:3, id:1},
                {name: 'Mr. Snif', type: 'Blood',age:3, id: 2},
                {name: 'Mr. Sniffle', type: 'hound',age:3, id:3}
]

app.get('/dogs', (req, res) => {
    res.send(dogs);
});

app.post('/dogs',(req,res) =>{
  const newDog = uuidv1;
    newDog.id = uuidv1;
    dogs.push(req.body);
    res.send(req.body);


    
    
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});



