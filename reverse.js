function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('elephant');

console.log(reverseString('elephant'));

const args2 = process.argv.slice(2);
let string = '';

for (let i = 0; i < args2.length; i++) {
  for (let j = (args2[i].length - 1); j >= 0; j--) {
    string += args2[i][j];
  }
  string += '\n';
}

console.log(string.trim());
 
That’s what i put for reverse
const args2 = process.argv.slice(2);
let string = '';

for (let i = 0; i < args2.length; i++) {
  for (let j = (args2[i].length - 1); j >= 0; j--) {
    string += args2[i][j];
  }
  string += args2[i][0] + 'ay';
}

console.log(string.trim());