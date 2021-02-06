let assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
module.exports = assertEqual;

function eqArrays(actual, expected) {
  if ((actual === expected) && (actual.length() === expected.length()))
    console.log(actual)
    console.log(expected)

  for (let i = actual.length - 1; i >= 0; i--) {
  console.log(`${actual[i]}, ${expected[i]}`)
    if (actual[i] !== expected[i]) 
      return false;
  }
  return true; //when I change this value it changes the pass rating - sus
}

assertEqual(eqArrays([2, 2, 2], [2, 2, 2, 7]), true);
assertEqual(eqArrays([1, 2, 3], [2, 2, 2]), false);
