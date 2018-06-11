const axios = require('axios');
 
 
 axios.get('https://swapi.co/api/people/1').then(response => {
   const film1 = response.data.films[0];
   return film1;
 })
 .then(response => {
   return axios.get(response)
 })
 .then(response => {
    return axios.get(response.data.planets[0])
 })
 .then(response => {
    return response.name
 })
 .catch(err => {
   console.log(err)
 })