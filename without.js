let arr1 = ["hello", "world", "lighthouse"];
let arr2 = ["hello"]

// const without = arr1.filter(element => arr2.indexOf(element) === -1)

//or

const without = (arr1, arr2) => {
  return arr1.filter(element => arr2.indexOf(element) === -1)
}

//or

// const without = function(arr1, arr2) {
//   let filteredArray = [];
//   for (const element of arr1) {
//     if (!arr2.includes(element)) {
//       filteredArray.push(element);
//     }
//   }
//   return filteredArray;
// };

// console.log(arr1)
// console.log(arr2)
console.log(without(arr1, arr2))