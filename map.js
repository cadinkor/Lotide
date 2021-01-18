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

// const words = ["ground", "control", "to", "major", "tom"];

// //function definition/template (how the function will work)
// const map = function(array, callback) { //
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// }
// //map is going to change somehting about the array and return a new one 

// const results1 = map(words, word => word[0]); //words is connecting const words which is an array, word => word is the callback paramter of the anonymous function labelled under const map 
// console.log(results1);

//const results1 = map(words, word => word[0]); //words jumps to array + wprd => word jumps to the callback portion

//I dont understand the above portion of code very well. 
//Below this line is the second part of the activity

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    let letter = callback(item)
      results.push(letter)
    // results.push(callback(item)); same as above two lines for clarity sake
  }
  return results;
}

const results1 = map(words, word => word[0]); //words is connecting const words which is an array, word => word is the callback paramter of the anonymous function labelled under const map 
console.log(results1);

