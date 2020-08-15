let  array1 = [1, 2,"3", "2"];
let array2 =  [1,2,"4","4","5",4,591,392,391,2,5,10,2,1,1,1,20,20];


const cleanTheRoom = (array) => {
    let finalArray = [];
    let similarVal = 0;
    let newValue = 0;
    let len =0;
    let i = 0;
//sortArray is used to sort the given array
const sortArray = (array) => {
    array.sort( (a,b) => a-b);
}
//sortArrayBySimilarValue is used to split the sorted array into subarray of similar value
const sortArrayBySimilarValue = (array) =>{
    
    sortArray(array);
    newValue = array[0];
    len = array.length;
    array.forEach((val ,index) =>  {
        if(val === newValue){
          similarVal++;
        }else{
          setValueOfArray();
          newValue = val;
          similarVal = 1;  
        if(index === len-1){
         setValueOfArray();    
        }
       }
     });
     console.log(finalArray);
     
}
//setValueOfArray is used to create a finalArray of subarray formed in sortArrayBySimilarValue method
const setValueOfArray = () =>{
  if(similarVal>1){
    finalArray[i++]=new Array (similarVal).fill(newValue);
  }
  else if(similarVal == 1){
   finalArray[i++] = newValue;
    }
}
//splitByDataType is used to create the result array by spliting the arrays as per their data type
const splitByDataType = () =>{
    let numArray = [];
    let stringArray = [];
    newValue = 0;
    similarVal = 0;

for( splitVal of finalArray){
  let checkValue;
    if(splitVal.length>1)  checkValue = splitVal[0];
    else checkValue = splitVal;

    if(typeof(checkValue) === 'number') numArray[newValue++] = splitVal;
    if(typeof(checkValue) === 'string') stringArray[similarVal++] = splitVal;
  }

 let concatArray = [];
 concatArray[0] = numArray;
 concatArray[1] = stringArray;
 console.log(concatArray);
}

sortArrayBySimilarValue(array);
    splitByDataType(); 

}
cleanTheRoom(array1);
cleanTheRoom(array2);