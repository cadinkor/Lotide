let assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
module.exports = assertEqual;

const findKeyByValue = function(box, string) { //box and string are parameters of the function called findKeyByValue
  let newArray = Object.keys(box); //keys = sci_fi, comedy, drama //box = const = bestTvShowsByGenre //values = the strings following each genre 
  for (let key of newArray) {
    //console.log(box[key])
    if (box[key] === string) {
      return key;
    }
  }
}

const bestTVShowsByGenre = {  //this object can change to test various values
  sci_fi: "The Expanse",
  comedy: "Brooklyn 99",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 