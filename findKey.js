const findKeys = function(object, callback) {
  const objArray = Object.keys(object);
  for (let arrayElement of objArray) {
    if (callback(object[arrayElement])) {
      return arrayElement;
    }
  }
};

module.exports = findKeys;

findKeys({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(findKeys("Blue Hill", x => x.stars === 3))