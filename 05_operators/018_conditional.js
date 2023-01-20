/* conditional operators */
// ternary operator
var f = 60;

console.log(a > b ? 'a is greater than b' : 'a is less than b');
console.log(c > d ? 'c is greater than d' : 'c is less than d');
console.log(e > f ? 'e is greater than f' : 'e is less than f');

// if else operator
if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

if (c > d) {
    console.log('c is greater than d');
} else {
    console.log('c is less than d');
}

if (e > f) {
    console.log('e is greater than f');
} else {
    console.log('e is less than f');
}

// switch operator
switch (true) {
    case a > b:
        console.log('a is greater than b');
        break;
    case a < b:
        console.log('a is less than b');
        break;
    default:
        console.log('a is equal to b');
}

switch (true) {
    case c > d:
        console.log('c is greater than d');
        break;
    case c < d:
        console.log('c is less than d');
        break;
    default:
        console.log('c is equal to d');
}

switch (true) {
    case e > f:
        console.log('e is greater than f');
        break;
    case e < f:
        console.log('e is less than f');
        break;
    default:
        console.log('e is equal to f');
}

