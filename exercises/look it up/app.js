// function dictionary(){
//     this.datastore = [];

//     this.add = function(key, value){
//         if(key && value){
//             this.datastore.push({
//                 key: key,
//                 value: value
//             });
//             return this.datastore
//         }
//     }
// };

// this.removeAt = function(key){
//     for(var i = 0; i < this.datastore.length; i++){
//         if(this.datastore[i].key === key){
//             this.datastore.splice(this.datastore[i], 1);
//             return this.datastore;
//         }
//     }
//     return this.datastore;
// };

// this.findAt = function(key){
//     for(var i = 0; i< this.datastore.length; i++){
//         if(this.datastore[i].key === key){
//             return this.datastore[i].value;
//         }
//     }
//     return this.datastore;
// };

// this.size = function(){
//     return this.datastore.length;
// };

// var dictionary = new dictionary();
// dictionary.add("one", 1);
// dictionary.add("two", 2);
// dictionary.add("three", 3)
// console.log(dictionary.size());

var chai = require('chai');
var assert = chai.assert;

// describe("create a dictionary that has words and their definitions", function(){
//     it("should add a word and a definition for that word",function(){
//         assert.equal(JSON.stringify(addWord('cat', 'a dumb animal')), JSON.stringify)({cat: 'a dumb animal'})
//     })
// })

describe("create a dictionary that has words and their definitions", function(){
    it("should add a word and a definition for that word",function(){
        assert.equal(addWord('cat', 'a dumb animal'),('a dumb animal')
    })
    it("should return the definition of a word we give", function(){
        assert.equal(lookItUp('cat'),'a dumb animal')
    })
})