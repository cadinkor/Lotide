const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ' || ){
      continue
    }

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  // console.log(results);
  return results;
}
  
console.log(letterPositions('!this is a testttt'));
// console.log(letterPositions('abcdefghijklnmpqrstuvwxyz'));

