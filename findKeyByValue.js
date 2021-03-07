let assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
module.exports = assertEqual;

//keys = sci_fi, comedy, drama 
//box = const = bestTvShowsByGenre 
//values = the strings following each genre

const findKeyByValue = function(box, string) {
  let newArray = Object.keys(box)
  for(const key of newArray){
    // if(box[key] === string){
      // return key
      console.log(box[key] === string)
    // }
    // console.log(box[key])
    // console.log(string)
  }
  // console.log(newArray)
}

const bestTVShowsByGenre = {  //this object can change to test various values
  sci_fi: "The Expanse",
  comedy: "Brooklyn 99",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn 99"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
