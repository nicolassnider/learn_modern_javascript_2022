function greet() {
	console.log('Hello World')	
}

function sayName(name) {
	console.log(`Hello ${name}`)
}

setTimeout(greet, 1000);
sayName('John');