/* comparison operators */
// equal
console.log(1 == 1); // true
console.log(1 == '1'); // true
console.log(1 == true); // true
console.log(1 == false); // false
console.log(0 == false); // true
console.log('' == false); // true
console.log('' == 0); // true
console.log('0' == 0); // true
console.log('0' == false); // true
console.log('1' == true); // true
console.log('1' == 1); // true
console.log('one' == 1); // false

// strict equal
console.log(1 === 1); // true
console.log(1 === '1'); // false
console.log(1 === true); // false
console.log(1 === false); // false
console.log(0 === false); // false
console.log('' === false); // false
console.log('' === 0); // false
console.log('0' === 0); // false
console.log('0' === false); // false
console.log('1' === true); // false
console.log('1' === 1); // false
console.log('one' === 1); // false

// not equal
console.log(1 != 1); // false
console.log(1 != '1'); // false
console.log(1 != true); // false
console.log(1 != false); // true
console.log(0 != false); // false
console.log('' != false); // false
console.log('' != 0); // false
console.log('0' != 0); // false
console.log('0' != false); // false
console.log('1' != true); // false
console.log('1' != 1); // false
console.log('one' != 1); // true

// strict not equal
console.log(1 !== 1); // false
console.log(1 !== '1'); // true
console.log(1 !== true); // true
console.log(1 !== false); // true
console.log(0 !== false); // true
console.log('' !== false); // true
console.log('' !== 0); // true
console.log('0' !== 0); // true
console.log('0' !== false); // true
console.log('1' !== true); // true
console.log('1' !== 1); // true
console.log('one' !== 1); // true

// greater than
console.log(1 > 1); // false
console.log(1 > 0); // true
console.log(1 > '1'); // false
console.log(1 > true); // false
console.log(1 > false); // true
console.log(0 > false); // false
console.log('' > false); // false