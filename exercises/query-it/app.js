  
const database = [  
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];


const filterDatabase=(query, arr) => {  //nested for loop
    return arr.filter(entry =>
    object.keys(query).every(key => entry => entry[key] === query[key])
)
}  


filterDatabase({dolphin: "squeak!"}, database);  
   

filterDatabase({firstName: "Jack", age: 2}, database);  
    
[
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jack", lastName: "White", age: 2}
]