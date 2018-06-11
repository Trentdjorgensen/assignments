const axios = require('axios');
  

 axios.get('https://swapi.co/api/people/1').then(response => {
   const film1 = response.data.films[0];
   return film1;