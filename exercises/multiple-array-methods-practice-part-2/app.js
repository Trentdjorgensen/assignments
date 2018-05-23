// function sortedDogOwners(arr) {
 
// return arr.filter(person => person.pets.includes('dog'))  //fix
// .sort((a,b)=>a.age-b.age);
// }  

sortedDogOwners([  
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    }, 
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    }, 
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    }, 
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    }, 
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
]);

sortedDogOwners();


// // ['<li>Alfred</li>',function arbitraryPractice(arr) {
//     var finalNames = [];
//     var nameArr = arr.filter(owner=> owner.age > 20 && owner.pets.filter(pet=> pet.nickNames.length > 0).length === owner.pets.length)
//     nameArr.map(name=> name.pets.map(pet=>finalNames.push(`<li>${pet.name}</li>`)))
//     return finalNames
//   }

// console.log(arbitraryPractice([  
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47,
//         pets: [
//             {
//                 name: "Alfred",
//                 type: "dog",
//                 nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
//             },
//             {
//                 name: "Charles",
//                 type: "cat",
//                 nickNames: ["Charley"]
//             },
//             {
//                 name: "Bark Obama",
//                 type: "dog",
//                 nickNames: ["Barack", "Mr. President"]
//             },
//             {
//                 name: "Christopher George Latore Wallace",
//                 type: "dog",
//                 nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
//             }

//         ]
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12,
//         pets: [
//             {
//                 name: "Howard",
//                 type: "dog",
//                 nickNames: []
//             },
//             {
//                 name: "Bear",
//                 type: "dog",
//                 nickNames: []
//             }
//         ]
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78,
//         pets: [
//             {
//                 name: "Bird Person",
//                 type: "bird",
//                 nickNames: ["Phoenixperson"]
//             },
//             {
//                 name: "Krombopulos Michael",
//                 type: "Gromflomite",
//                 nickNames: ["Assassin man"]
//             },
//             {
//                 name: "Squanchy",
//                 type: "Cat-person",
//                 nickNames: ["Squanch", "Smarf", "Thunder Cat"]
//             }

//         ]
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 23,
//         pets: [
//             {
//                 name: "Morty Jr.",
//                 type: "Gazorpazorp",
//                 nickNames: ["Gwendolyn Jr."]
//             },
//             {
//                 name: "Snuffels",
//                 type: "dog",
//                 nickNames: ["Snowball"]
//             }

//         ]
//     }
// ]));

// //should return 

//  '<li>Charles</li>',
//  '<li>Bark Obama</li>', 
//  '<li>Christopher George Latore Wallace</li>',
//  '<li>Morty Jr.</li>', 
//  '<li>Snuffels</li>']