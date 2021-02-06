let array = [1.8, 2.1, 3.3, 4.2, 5.5, 6.8, 7.3, 8.9]

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]]; //even array length
  } else {
    return [array[Math.floor(array.length / 2)]]; //odd array length
  }
};



console.log(middle(array))

// if (array.length % 1 === 0){
//   return (array.length/2 

// https://github.com/sockbot/lotide/blob/master/middle.js

// const assert = require('chai').assert;
// const middle = require('../tail');

// describe("#middle", () => {
//   it("returns [] for [1]", () => {
//     assert.deepEqual(tail([1]), []);
//   });

//   it("returns [] for [1, 2]", () => {
//     assert.deepEqual(tail([]), [1, 2]);
//   });

//   it("returns [2] for [1, 2, 3]", () => {
//     assert.deepEqual(tail([2]), [1, 2, 3]);
//   });

//   it("returns [2, 3] for [1, 2, 3, 4]", () => {
//     assert.deepEqual(tail([2, 3]), [1, 2, 3, 4]);
//   });

// });
    
// const middle = function(array){
//     if (array.length <= 2){ 
//       return [];
//     }
//     if (array.length % 2 !== 0){
//       return [array[(array.length - 1) / 2]];
//     }else if (array.length % 2 === 0){
//       let result = [];
//       result.push(array[Math.round((array.length - 1) / 2) - 1]) 
//       result.push(array[Math.round((array.length - 1) / 2)]) 
//         return result;
//     }
//   }  
  