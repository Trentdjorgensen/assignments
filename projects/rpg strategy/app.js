var ask = require('readline-sync');


function Champion (name, hp, attack, loot){
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.loot = [];
}

function Enemy (name, hp, attack){
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}


console.log('Welcome! Are you ready to begin?')

var userName = ask.question('Enter thy name. ');
console.log('Welcome ' + userName + '!');

  champs = ['Knight', 'Wizard', 'Elf']
  var index = ask.keyInSelect(champs, 'Which champ?');
console.log('You have chosen the ' + champs[index]);

if(champs[index] === 'Knight'){
  var player = new Champion('Knight', 80, 40);
}else if(champs[index] === 'Wizard') {
  var player = new Champion('Wizard', 100, 50);
}else if(champs[index]=== 'Elf') {
  var player = new Champion('Elf', 50, 80);
}

//display player starting stats
console.log("Your hp is " + player.hp)


  while(player.hp > 0){ 
    walk();
  }
  console.log('Game Over!');
// // you won or lost!


function walk(){
  var walking = ask.keyIn('Push w to walk, push p to print inventory');
  if(walking === "w"){
    if(Math.random() <= .50){
      fight();
    } else {
      console.log("You didn't run into a monster.");
    }
  }else if(walking === "p") {
    console.log("your hp is " + player.hp);
    console.log("your attack is " + player.attack);
  }else{
    console.log('please push either p or w')
    walk()
  }
}

function fight(){
  console.log('you ran into a monster')
  var monster = enemyCreation()
  console.log(monster)
  while(player.hp > 0 && monster.hp > 0){
    var fight = ask.keyIn('push r to run, push f to fight');
  if(fight === "f"){
      player.hp -= enemyAttack(monster)
      monster.hp -= attackEnemy(player) 
      console.log('You hp is ' + player.hp);
      console.log('monster is '+ monster.hp);
  }else if(fight === "r"){
    if (Math.random() <= .5){
      console.log('you got away');
      walk()
      break;
    }else{
      console.log('You did not run fast enough, you were caught');
      player.hp -= enemyAttack(monster)
      monster.hp -= attackEnemy(player) 
      console.log('You hp is ' + player.hp);
      console.log('monster is '+ monster.hp);
    }
  }
    
  }
}
function enemyCreation(){
  var monster = ['Gobler','Smogster',"Ghost"];
  var index = Math.floor(Math.random()* 3);
  console.log('The enemy is a '+ monster[index])

  if(monster[index] === 'Gobler'){
    var enemy = new Enemy('Gobler', 10, 10);
    return enemy;
  }else if(monster[index] === 'Smogster'){
    var enemy = new Enemy('Smogster',20, 10);
    return enemy;
  }else if(monster[index] === 'Ghost'){
    var enemy = new Enemy('Ghost',30, 30);
    return enemy;
  }
}

  


function attackEnemy(player){
  return Math.floor(Math.random() * player.attack)
}


function enemyAttack(enemy){
     return Math.floor(Math.random() * enemy.attack)
}