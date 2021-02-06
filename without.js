const arrayOne = ["hello", "world", "lighthouse"];
const arrayTwo = ["hello"]

const without = arrayOne.filter(x => arrayTwo.indexOf(x) === -1)

// function eqArrays(arrayOne, arrayTwo) {

//   if (arrayOne.length !== arrayTwo.length) {//I am comparing array one and array two. 
//     return false;   //I want them to strictly === and that will return false if they aren't the same 
//   }
//   for (let i = 0; i < arrayOne.length; i++) {//go through one item at a time for arrayOne

//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }

//   }
//   //and if they don’t then return true
//   return true;
// }

// function assertArrayEqual(actual, expected) {
  
//   if (eqArrays(actual, expected)) {
//     console.log(`😈😈😈 Assertion Passed: ${actual} === ${expected}`);

//   } else {
//     console.log(`🤮🤮🤮 Assertion Failed:${actual} !== ${expected}.`)

//   }
// }

console.log(arrayOne)
console.log(arrayTwo)
console.log(without)
// assertArraysEqual(eqArrays([arrayOne], [arrayOne]), true);
// assertArraysEqual(eqArrays([arrayOne], [arrayTwo]), false);
