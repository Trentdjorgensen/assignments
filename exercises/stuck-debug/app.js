var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option != 'fight bears'){
  ask.keyInSelect(options, "What would you like to do today?: ");
}
  else if(option = 'shoot guns');{
    console.log("you shoot guns");
  }else(option = 'pick flowers');{
    console.log("You pick some flowers. You make a bouquet.");
  }
}

console.log("You fought a bear and got beat up!");