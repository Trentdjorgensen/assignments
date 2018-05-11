crud create post
read get
update put
delete  delete



// var axios = require('axios');

// axios.get('http://swapi.co/api/people/1').then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error)

// ))


// var axios = require('axios');

// var newTodo = {
//     title: "practice axios Todo",
//     description: "It's only a practice"
// }

// axios.post('http://swapi.co/api/people/1', newTodo).then(function(response){
//     console.log(function(err){
//     }).catch(function(err){
//         console.log()
//     })


var axios = require('axios');

var newTodo = {
    title: "practice axios Todo",
    description: "It's only a practice"
}

axios.delete('http://swapi.co/api/people/1${id}').then(function(response){
    console.log(function(err){
    }).catch(function(err){
        console.log()
    })