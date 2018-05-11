var ask = require('readline-sync');

var hasKey = false;

var isAlive = true;

var options = ['put hand in hole', 'find key', 'open door'];

var index = ask.keyInSelect(options, ' what do you want to do?');

if(options[index] === 'put hand in hole'){
    console.log('you die"')
    isAlive = false;
}else if (options[index] === 'open door'){
    if(hasKey){
        console.log('the door opens')
        console.log('you win the game')
    }else{
        console.log('go find the key first')
    }else if (options[index] === 'find key'){
        hasKey = true;
        console.log('you found the key')
    }
}