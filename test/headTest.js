// const assertEqual = require('/lotide/assertEqual');

// // let assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
//   }
// };
// module.exports = assertEqual;

// function head (arr) {
//   return arr[0];
// }

// assertEqual(head([5,6,7]),5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]),"Hello");

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});