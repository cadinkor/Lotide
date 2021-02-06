const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const countLetters = function(word){
//   const result = {}
//   for (const letter of word){
//     if (letter !== " "){
//       if (result[letter]){ 
//           result[letter] += 1;
//         } else {
//           result[letter] = 1
//         }
//     }
//   }
//   return result
// }

// console.log(countLetters('lighthouse labs'));

const countLetters = function(sentence){
  const results = {}
  for (const letter of sentence){
    if (results [letter]){ 
      if (results[letter]){
        results[letter] += 1;
      } else {
        results[item] = 1
      }
    }
    return results
   }
}

console.log(countLetters('lighthouse labs'));


// const countLetters = function(sentence) {
//   let finalCount = {};
//   for (let letter of sentence) {
//     if (letter !== " ") {
//       if (finalCount[letter]) {
//         finalCount[letter] += 1;
//       } else {
//         finalCount[letter] = 1;
//       }
//     }
//   }
//   return finalCount;
// };

// console.log(countLetters('lighthouse labs'));
