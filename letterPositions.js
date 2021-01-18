const letterPositions = function(sentence) {
  const obj = {}; //obj is going to be each letter in the string that we're finding the index
  
  for (let i = 0; i < sentence.length; i++) { //looping through the length the sentence 
    let letter = sentence[i]
    if (sentence[i] === ' ')  {
      continue  //not wanting to 'return' because it woul stop the loop because return = final result to the terminal 
      //continue and ignore by the logic in the if statement
    }
    if (obj[sentence[i]]) { //if we find the letter within the sentence (that's in an array because we need the indice location) we then push it forward and repeat the loop
      obj [sentence[i]].push(i); //i will be the indice of the string (that is in an array) and will be pushed and the loop will repeat to check the next value
      // console.log(obj)
    } else { //if a new indice/location of the letter is found it'll push it again, but if not it will come here to 1) end the loop or 2) push the next letter 
      obj [sentence[i]] = [i]; //the letter, that is a string, within an array and presented in an object is pushedd here again
    }
  }
  // delete obj[' ']; //I don't understand what this portion of the code is doing + why do we not need .push for the else statement - is it because we are just adding onto the next value? 
  return obj;
};
  
// console.log(letterPositions('this is a test'));
console.log(letterPositions('hello here we go'));

