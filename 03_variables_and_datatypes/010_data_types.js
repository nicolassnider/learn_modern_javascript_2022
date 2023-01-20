//a number divided by zero refrens to infinity
console.log(10/0);
//a negative number divided by zero refrens to -infinity
console.log(-10/0);
//a string divided by a number refrens to NaN
console.log('hello'/2);
//a string divided by a string refrens to NaN
console.log('hello'/'world');
//a number divided by a string refrens to NaN
console.log(10/'hello');


/* a object is used to store a collection of data 
key/value pairs separated by commas enclosed in curly braces
key must be string*/
var person = {
	name: 'John',
	age: 30,
	city: 'New York'
};

/* array is used to store multiple values of the same data type 
items are comma separated*/
var colors = ['red', 'green', 'blue'];

/* function is a set of statements inside a code block */
function add(x, y) {
	return x + y;
}
