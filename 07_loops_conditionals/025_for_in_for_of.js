/* for in */
var obj = {a: 1, b: 2, c: 3};
for (var prop in obj) {
	  console.log(prop, obj[prop]);
}

/* for of */
var arr = [1, 2, 3];
for (var element of arr) {
	  console.log(element);
}
