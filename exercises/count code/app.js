// function countcode(str){
//     var count = 0;
//     for(var i = 0; i < string.length; i ++){
//         if (str[i] === 'c'){
//             if (string[i + 1] === "o"){
//                 if(str [i + 3]=== 'e'){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }

// second one

// function countcode(string){
// var match = string.match(/'co.e'/g);
//     return match ? match.length : 0;
// }

// countCode("aaacodebbb") -> 1 
// countCode("codexxcode") -> 2 
// countCode("cozexxcope") -> 2

function countCode(string){
    var myArr = string.split('')
   return myArr.reduce(function(final, letter, i){
        if
   }, 0)
}