let assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
module.exports = assertEqual;

let tail = function (arr) {
  return arr.slice(1) 
} 

console.log(tail ([4,5,6,7]))