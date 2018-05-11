

// const crypto = require('crypto');
// const cipher = crypto.createCipher('aes192', 'a password');

// let encrypted = '';
// cipher.on('readable', () => {
//   const data = cipher.read();
//   if (data)
//     encrypted += data.toString('hex');
// });
// cipher.on('end', () => {
//   console.log(encrypted);
  
// });

// cipher.write('some clear text data');
// cipher.end();

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? ')); 


function caesarCipher(input, shift) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var newStr = "";
    for(var i = 0; i < input.length; i++) {
        if(letters.indexOf(input[i]) === -1) {
            input += input[i];
        } else {
            var position = letters.indexOf(input[i]);
            newStr += letters[(position + shift) % 26];
        }
    }
    return newStr;
}




console.log(caesarCipher(input, shift));