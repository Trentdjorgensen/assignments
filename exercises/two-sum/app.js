const twoSum = (arr, num) => {
    let final = []
    let total = arr.length * 2;
    for(let i = 0; i < arr.length; i++){
        for( let j = i; j < arr.length; j++){
         if ((arr[i] + arr[j] === num && i !== j) && i + j < total) {
             final = [i, j];
           }
        }
    }
    return final
  }
  
  console.log(twoSum([1,2,3], 4));
  console.log(twoSum([7,4,18,4,3,1,21], 8))