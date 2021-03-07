const eqArrays = require('./eqArrays');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);

  if (object1KeyArray.length !== object2KeyArray.length) {
    return false;
  } else {

    for (const keyName of object1KeyArray) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
        if(!eqArrays(object1[keyName], object2[keyName])) {
          return false;
        }
      } else if (typeof object1[keyName] === 'object' && typeof object2[keyName] === 'object') {
        if(!eqObjects(object1[keyName], object2[keyName])) {
          return false;
        }
      } else {
        if (object1[keyName] !== object2[keyName]) {
          return false;
        }
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)) // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false