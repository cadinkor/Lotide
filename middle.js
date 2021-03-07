let array = [1.8, 2.1, 3.3, 4.2, 5.5, 6.8, 7.3, 8.9]
// let array = [1.8, 2.1, 3.3, 4.2, 6.8, 7.3, 8.9]

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