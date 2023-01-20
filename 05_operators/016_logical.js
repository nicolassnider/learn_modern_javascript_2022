/* logical operators */

// logical AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// logical OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// logical NOT
console.log(!true); // false
console.log(!false); // true


// logical AND with objects
console.log({} && {}); // {}
console.log({} && null); // null
console.log(null && {}); // null
console.log(null && null); // null

// logical OR with objects
console.log({} || {}); // {}
console.log({} || null); // {}
console.log(null || {}); // {}
console.log(null || null); // null

// logical NOT with objects
console.log(!{}); // false
console.log(!null); // true

// logical AND with arrays
console.log([] && []); // []
console.log([] && null); // null
console.log(null && []); // null
console.log(null && null); // null

// logical OR with arrays
console.log([] || []); // []
console.log([] || null); // []
console.log(null || []); // []
console.log(null || null); // null

// logical NOT with arrays
console.log(![]); // false
console.log(!null); // true

// logical AND with functions
console.log(function() {} && function() {}); // function() {}
console.log(function() {} && null); // null
console.log(null && function() {}); // null

