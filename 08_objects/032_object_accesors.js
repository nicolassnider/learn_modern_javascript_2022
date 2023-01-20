/* array accessors */
//
/* getters and setters */
var person = {
	name: "John",
	age: 31,
	favColor: "green",
	height: 183,
	/* getter */
	get birthYear() {
		return 2016 - this.age;
	},
	/* setter */
	set birthYear(year) {
		this.age = 2016 - year;
	}
};




