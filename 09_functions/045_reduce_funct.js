/* reduce() */
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax



// Parameters
// callback
// Function to execute on each element in the array, taking four arguments:
// accumulator
// The accumulator accumulates callback's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).
// currentValue
// The current element being processed in the array.
// currentIndex Optional
// The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
// array Optional
// The array reduce() was called upon.
// initialValue Optional
// A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.

// Return value
// The single value that results from the reduction.

// Description
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// The reducer function takes four arguments:

// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)
// Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

// Note: reduce() does not execute the function for array elements without values.

// Note: this method does not change the original array.

// Example 1
// Sum all the values of an array
var array1 = [1, 2, 3, 4];
var reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// Example 2
// Sum all the values of an array
var array1 = [1, 2, 3, 4];
var reducer = (accumulator, currentValue) => accumulator + currentValue;

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// Example 3
// Flatten an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function (accumulator, currentValue) {
    return accumulator.concat(currentValue);
  })



