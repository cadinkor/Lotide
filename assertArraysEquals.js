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

