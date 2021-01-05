const assertEqual = function(a, b) {
  return a + b ;
};

console.assert(assertEqual(2, 2) === 4);
console.assert(assertEqual(1, 10) === 50);
console.assert(assertEqual(25, 25) === 50);
console.assert(assertEqual(1, 100) === 5);

