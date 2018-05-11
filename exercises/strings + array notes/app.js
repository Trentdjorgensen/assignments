// var str = "This is our string"

// var another = ", President Garfield";

// var stringsToGether = str.concat("",)
// console.log(str.toUpperCase));



// 2
// function capitalize(str){
//     stringArray = str.split(" ");
//     console.log(stringArray);
//     for(var i = 0; i < stringArray.length; 1++){
//         stringArray[i] = stringArray[i].slice(0, 1).toUpperCase.concat(stringArray[i].slice(1))
//     }

//     return stringArray.john(" ")
// }

// console.log(capitalize("this is our string to capitalize all of the first letters"));

var arr = ['cat', 'dog','wallabee'];
// push method pushes an new item onto the end of an array. returns the length of the array. 
// modifys the origal array. newt #4

console.log(arr.push.push('newt'))

console.log(arr)

function pusher (str){
    arr.push(str)
    return arr
}

console.log(pusher('mudskipper'))

//pop method pops off the last item of an array. returns returns item removed
    // arr.pop() === ['cat', 'dog'] 
    //returns arr === 'wallaby'

//shift method takes out the first item of the array
    //arr.shift() == ['dog', wallaby']
    //returns arr === 'cat'

//unshift method (mutaer method)
//add a new specified item to the beginning of the array

//console.log(arr.unshift('penguin'))
//console.log(arr)


//splice method (starting index, # of items to be removed, items to add) (changes the original array mut)

var arr = ['cat', 'dog']
            
                //arr.slice(1, 0) start of index is the position
var newArr = arr.splice(0, 2, 'naked mole rat')
console.log(newArr)
console.log(arr)

// splice method allows you to add and remove items from a specified location in an array.
    // arr.splice(2,1,'mouse') === ['cat', 'dog', 'mouse']       (acseser method)
    // return arr === [ 'wallaby']

//slice method (start of index, endingIndex( up to but not including)


//copies specified items out of an array
    //arr.slice(1, 2) == ['dog']
    //return arr == ['cat', 'dog', 'wallaby']

    //indexOf method()
    //gets index of a specified item. (accessor method)
    //arr.indexOf('dog') ===1
    //return arr === ['cat', 'dog', 'wallaby']
    

