const myObj ={
    name:'trent',
    age:29,
    favColor: 'blue'
}
  

for(let key in myObj){
    console.log(key)
}




function stringifyUrl(url, query) {  
    let queryStr = '?'
}

const url = "http://localhost:8080/monkeys"  
const query = {  
  color: "black",
  species: "howler"
}

stringifyUrl(url, query)  
//returns "http://localhost:8080/monkeys?color=black&species=howler"