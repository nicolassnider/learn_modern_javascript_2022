/* example of object */
var person = {
	name: "John",
	age: 31,
	favColor: "green",
	height: 183
};

/* example of object method */
var person2 = {
	name: "John",
	age: 31,
	favColor: "green",
	height: 183,
	/* method */
	changeName: function (name) {
		this.name = name;
	}
};

/* access object properties */
console.log(person.name);

for(const k in person){
	console.log(k, person[k]);
}

let keys = Object.keys(person);
let values = Object.values(person);
console.log(keys);
console.log(values);

JSON.stringify(person);