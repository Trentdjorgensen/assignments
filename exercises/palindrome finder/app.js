// // var str = ['racecar', 'boat', '']

// // function reverseString(str);{
// //     return str;
// // }
// // console.log("racrecar");

// function isPalindron(str){
// var = alphabet = 'abcdefghijklmnopqrstuvwxyz';

// var myArr = str.split(''); {
// var myStr = '';
    
//     myArr.array.forEach(char){
//         for(var i = 0; i < alphabet.length; i++){
//             if(char.toLowerCase() === alphabet[i]){
//                 myStr += char;
//             }
//         }
//     })
//     return myStr
// }




// isPalindrome("Star Rats!");  // true  
// isPalindrome("palindrome");  // false  
// isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true  


var arr = str.toLowerCase().split('').filter(function(char){
    return "abcdefghijklmnopqrstuvwxyz".indexOf(char) >= 0;
});

function isPalindrome(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    str = str.toLowerCase().split('');
    str = str.filter(char => alphabet.indexOf(char) !== -1);
    return str.join('') === str.reverse().join('');
}
