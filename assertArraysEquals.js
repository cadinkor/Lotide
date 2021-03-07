// const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i])


// module.exports = assertArraysEqual;

assertArraysEqual([2, 2, 2], [2, 2, 2]);
assertArraysEqual([1, 2, 3], [2, 2, 2]);