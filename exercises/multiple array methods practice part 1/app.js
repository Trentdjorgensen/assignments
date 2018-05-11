var people = ([  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ]);  

function sortOfAge(arr){
    var newArr= arr.filter(function(people){
        return people.age >18
    })
    var sorted = new Array.sort(function(a, b){
        return a.name > b.name
    })
    return sorted
}



function toDisplayInHTML(arr){
    arr.sort(function(a, b){
        return b.age - a.age
    }).map(function(person){
        
    })
}

console.log(toDisplayInHTML(people))