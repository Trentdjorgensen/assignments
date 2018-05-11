// // ES6 Classes
 

// // Animals, Dog, Cat


// class Animals {
//     constructor(type, isMammal, color, sound){
//         this.type = type;
//         this.isMammal = isMammal;
//         this.color = color;
//         this.sound = sound;
//     }
//     speak() {
//         console.log(this.sound)
//     }
// }


// class Dog extends Animals {
//     constructor(type, isMammal, color, sound){
//         super(type, isMammal, color, sound);
//     }
// }

// class Cat extends Animals {
//     constructor(type, isMammal, color, sound){
//         super(type, isMammal, color, sound);
//     }
// }


// var spot = new Dog('Lab', true, 'black', 'rrrrruff!');



class player{
    constructor(name,totalCoins,status,star){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.star = star;
    }
    gotHit(min, max){
    return Math.floor(Math.random() * 3)
    }
    
    }
    


class namePicked extends player{
    constructor(name,totalCoins,status,star){
    super(name,totalCoins,status,star)
    }
}

class namePicked extends player{
    constructor(name,totalCoins,status,star){
        super(name,totalCoins,status,star)
    }
}

var mario = new namePicked('Mario', 50, 'big', true);

var luigi = new namePicked('Luigi', 35, 'Power Up', true);
 
var status = ('Powered Up','Big','Small','Dead');

gotPowerUp(){
    1++
}