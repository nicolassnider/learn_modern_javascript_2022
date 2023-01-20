/* array methods */
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.pop()); // 5
console.log(arr1); // [1, 2, 3, 4]
console.log(arr1.push(6)); // 5
console.log(arr1); // [1, 2, 3, 4, 6]
console.log(arr1.shift()); // 1
console.log(arr1); // [2, 3, 4, 6]
console.log(arr1.unshift(7)); // 5
console.log(arr1); // [7, 2, 3, 4, 6]
console.log(arr1.reverse()); // [6, 4, 3, 2, 7]
console.log(arr1); // [6, 4, 3, 2, 7]
console.log(arr1.sort()); // [2, 3, 4, 6, 7]
console.log(arr1); // [2, 3, 4, 6, 7]
console.log(arr1.splice(2, 0, 5)); // []
console.log(arr1); // [2, 3, 5, 4, 6, 7]
console.log(arr1.splice(2, 1)); // [5]
console.log(arr1); // [2, 3, 4, 6, 7]
console.log(arr1.splice(2, 1, 5)); // [4]
console.log(arr1); // [2, 3, 5, 6, 7]
console.log(arr1.concat(8, 9)); // [2, 3, 5, 6, 7, 8, 9]
console.log(arr1); // [2, 3, 5, 6, 7]
console.log(arr1.join(" - ")); // 2 - 3 - 5 - 6 - 7
console.log(arr1); // [2, 3, 5, 6, 7]
console.log(arr1.slice(2)); // [5, 6, 7]
console.log(arr1); // [2, 3, 5, 6, 7]
console.log(arr1.slice(2, 4)); // [5, 6]

/* remove the last element from array as well as sdisplay index of 'grapes' */
let fruits = ['Orange','Banana','Grapes','Mango']
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.indexOf('Grapes'))
console.log(fruits)
