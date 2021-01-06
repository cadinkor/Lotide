const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const words2 = ['spray', 'limit']

const newArray = words.filter(function(val) {
  return words2.indexOf(val) == -1;
});

console.log(words)
console.log(newArray)