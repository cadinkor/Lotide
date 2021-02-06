const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" , c: "3"};

const eqObjects = function(obj1, obj2) { //obj 1 and obj 2 
  console.log(Object.keys(obj2));
if (Object.keys(obj1).length !== Object.keys(obj2).length) { //if the lengths of the keys aren't equal we're returning false 
  return false;
}
for (const key in obj1) { //if obj1's keys checked one by one arent equal to obj2 we return
  if ((obj1[key]) !== (obj2[key])) {
  return false;
}
} return true; //else they're equal
}

console.log(eqObjects(ab, ab)); //calling two values 
console.log(eqObjects(ab, ba)); 
// assertEqual(eqObjects(ab, ab), true);
// assertEqual(eqObjects(ab, ba), false);