const array1 = [1,2,3,4];
const array2 = [2,3,11,14,10,13];
const array3 = [2, 3, 1,2, -1, 0, 5, 4, -2, 6, 5, 23, 3, 9];

const checkTheSum = (array,num) => {
    let resultArray = [];
    array.sort ( (a,b) => a-b);
    for (let i=0 ; i < array.length-1; i++){
        for(let j=i+1; j < array.length ; j++){
               //checks the sum and whether the pair is repeated
            if(array[i]+array[j] === num && !(resultArray.includes(array[i],array[j]))){
                    resultArray.push([array[i],array[j]]);
                    break;
            }
        }
    }
    return resultArray;
}

console.log(checkTheSum(array1,4));
console.log(checkTheSum(array2,13));
console.log(checkTheSum(array3,4));
