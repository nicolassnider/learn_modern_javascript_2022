/* constructor */
var num1 = new Number(10);
console.log(num1); // [Number: 10]
var num2 = new Number(10);
console.log(num2); // [Number: 10]

function Person(name, age) {
	this.name = name;
	this.age = age;
}

const person1 = new Person('John', 30);
console.log(person1); // Person { name: 'John', age: 30 }
const person2 = new Person('John', 30);
console.log(person1==person2)
console.log(person1===person2)