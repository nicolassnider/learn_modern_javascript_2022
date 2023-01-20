/* HOISTING */
// Hoisting is a JavaScript mechanism where variables and function declarations are moved 
// to the top of their scope before code execution.
// Inevitably, this means that no matter where functions and variables are declared, 
// they are moved to the top of their scope regardless of whether their scope is global or local.
// This behavior "hoists" declarations to the top.

// NOTE: The only thing that is hoisted is the declaration, not the assignment.

// Example 1
a = 2;
var a;
console.log(a); // 2
// NOTE: This is the same as:
var a;
a = 2;
console.log(a); // 2

// Example 2
console.log(a); // undefined
var a = 2;

// Example 3
nameOfDog("Elmo");
function nameOfDog(name) {
    console.log(name);
}

// Example 4
console.log(num); // undefined
var num = 6;

// Example 5
console.log(num); // ReferenceError: Cannot access 'num' before initialization
let num = 6;

// Example 6
console.log(num); // ReferenceError: Cannot access 'num' before initialization
const num = 6;

// Example 7
console.log(num); // ReferenceError: Cannot access 'num' before initialization
let num;
num = 6;

/* // Example 8
console.log(num); // ReferenceError: Cannot access 'num' before initialization
const num;
num = 6;
 */
// Example 9
console.log(num); // ReferenceError: Cannot access 'num' before initialization
var num = 6;
num = 3;

// Example 10
console.log(num); // ReferenceError: Cannot access 'num' before initialization
let num = 6;
num = 3;

// Example 11
console.log(num); // ReferenceError: Cannot access 'num' before initialization
const num = 6;
num = 3;

// Example 12
console.log(num); // ReferenceError: Cannot access 'num' before initialization
var num = 6;
num = 3;

// Example 13
console.log(num); // ReferenceError: Cannot access 'num' before initialization
let num = 6;
num = 3;

// Example 14
console.log(num); // ReferenceError: Cannot access 'num' before initialization
const num = 6;
num = 3;

// Example 15
console.log(num); // ReferenceError: Cannot access 'num' before initialization

