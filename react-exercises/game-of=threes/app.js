// const gameOfThrees = (num, counter) =>{
//     while(num !==1){
//         if(num % 3 === 0 ){
//             num/=3
//             counter += 1
//         }else if(num % 3 !==0){
//             if(num +1 % 3 !==0){
//                 num -=1
//             }else{
//                 num +=1
//             }
//         }
//     } if (num ===1){
//         return counter
//     }
// }

// console.log(gameOfThrees(150000, 0))

//Recursive Solution

const gameOfThrees = (n, counter) =>{
    if(num ===1){
        return counter;
    }
    if(num % 3 === 0){
        n/3;
        counter += 1;
        return gameOfThrees(n,counter);
    }else if(num -1 % 3 !== 0){
        return gameOfThrees(n += 1, counter);
    }else if(n + 1 % 3!==0){
        return gameOfThrees(n -= 1, counter);
    }
    
}

console.log(30500,0);