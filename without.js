const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const words2 = ['spray', 'limit']

const newArray = words.filter((val) {
  return words2.indexOf(val) == -1;
});

console.log(words)
console.log(newArray)

const without = (array,items) => {
  const results = [];
    
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

.includes()
//manually loop through the values between the arrays and push the arrays dont exist 