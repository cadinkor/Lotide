const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" , c: "3"};

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    return (console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  } else {
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
  }
};

// console.log(assertObjectsEqual({a: '1' b, ab})); //calling two values 
console.log(assertObjectsEqual(ab, ba)); 
// assertEqual(eqObjects(ab, ab), true);
// assertEqual(eqObjects(ab, ba), false);
