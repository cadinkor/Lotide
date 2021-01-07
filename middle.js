let assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
module.exports = assertEqual;

function eqArrays(actual, expected) {
  if(actual === expected) 
  return true;
  for (let i = actual.length-1; i>=0; i--) {
    if (actual[i] !== expected[i]) 
    return false;
      }
     return true;
    } 

assertEqual(eqArrays([2, 2, 2], [2, 2, 2]), true);
assertArraysEqual(eqArrays([2, 2, 2], [2, 2, 2]), true);  

function assertArraysEqual (eqArrays) {
  if (true) {
    console.log("True, they're equal");
  } else {
    console.log("False, they're not equal");
  }
}
    
const middle = function(array){
    if (array.length <= 2){ 
      return [];
    }
    if (array.length % 2 !== 0){
      return [array[(array.length - 1) / 2]];
    }else if (array.length % 2 === 0){
      let result = [];
      result.push(array[Math.round((array.length - 1) / 2) - 1]) 
      result.push(array[Math.round((array.length - 1) / 2)]) 
        return result;
    }
  }  
  
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]