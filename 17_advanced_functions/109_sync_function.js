function greet(name,myFunction) {
	console.log('Hello World')
	myFunction(name);	
}

function sayName(name) {
	console.log(`Hello ${name}`)
}

setTimeout(greet, 1000);
sayName('John');