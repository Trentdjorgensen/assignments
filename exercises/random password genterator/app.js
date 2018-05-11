// function Max(i) {
//     var i;
//     var max = -Infinity;
//     for(i = 0; i < num1.length; i++) {
//         if (num1[i] > max) {
//             max = num1[i];
//         }
//     }
//     return max;
// }

// document.getElementById("num1").innerHTML = Math.random();

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}

console.log(randomString(16, 'aA'));
console.log(randomString(32, '#aA'));
console.log(randomString(64, '#A!'));

