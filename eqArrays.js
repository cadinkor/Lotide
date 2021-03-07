let assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i])

module.exports = eqArrays;

assertEqual(eqArrays([2, 2, 2], [2, 2, 2]), true);
assertEqual(eqArrays([1, 2, 3], [2, 2, 2]), false);