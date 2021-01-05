// function reverseString(str) {
//   let newString = "";
//   for (let i = [1]; i >= 0; i-) {
//       newString += str[i];
//   }
//   return newString + "ay";
// }
// reverseString('elephant');

// console.log(reverseString('elephant'));
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");