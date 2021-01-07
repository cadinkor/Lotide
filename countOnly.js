let assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
module.exports = assertEqual;

const countOnly = function(allItems, itemsToCount){

  const results = {};
  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    if (itemsToCount[item] === true) {
      if(results[item]) {
        results[item] = results[item] + 1;
      } else {
        results[item] = 1;
      }
    }
  }
  
// let itemstoCount = (firstNames, object) => {
//   if (firstNames )
// }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const object = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

const result1 = countOnly(firstNames, object)
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);