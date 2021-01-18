const assertEqual = require('../assertEqual');

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
    }
  };
  module.exports = assertEqual;
  
  