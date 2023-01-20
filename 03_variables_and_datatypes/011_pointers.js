/* pointers in javascript   */

/* a var can be assigned with another datatype */
var a = 10;
a = 'hello';

/* Object */
var person = {
	name: 'John',
	age: 30};

/* date */
var date = new Date();

/* array */
var colors = ['red', 'green', 'blue'];

/* map */
var map = new Map();

/* set */
var set = new Set();

/* primitive tupes are assigned by value
other types are assigned by reference */
	
var batman = 5
var superman = batman;
superman++
console.log(superman)
console.log(batman)

var superman = [1,2,3]
var flash = superman
flash.push(4)
console.log(superman)
console.log(flash)

var superman = [1,2,3]
var flash = [...superman]
flash.push(4)
console.log(superman)
console.log(flash)



//var 5a= a