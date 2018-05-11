var dictionary = {};

function addWord (word, define){
    word = word.replace(/([^aiou])s/, '');
    dictionary[word] = define;
    return dictionary
// }
// addWord('dog', 'an animal')
// addWord('cat', 'a similar animal')
// console.log(dictionary)

function lookItUp (word){
    return dictionary[word]
}


module.exports = {
    addWord,
    lookItUp
}