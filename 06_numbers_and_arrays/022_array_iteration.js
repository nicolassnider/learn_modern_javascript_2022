/* array iteration */

/* foreach() */
console.log('foreach()')
var arr3 = [1, 2, 3, 4, 5];
arr3.forEach(function (element, index, array) {
	console.log(element, index, array);
});

/* map() */
console.log('map()');
var arr4 = [1, 2, 3, 4, 5];
var arr5 = arr4.map(function (element, index, array) {
	return element * 2;
});
console.log(arr5);

/* filter() */
console.log('filter()')
var arr6 = [1, 2, 3, 4, 5];
var arr7 = arr6.filter(function (element, index, array) {
	return element > 3;
});
console.log(arr7);

/* reduce */
console.log('reduce()')
var arr8 = [1, 2, 3, 4, 5];
var arr9 = arr8.reduce(function (accumulator, element, index, array) {
	return accumulator + element;
});
console.log(arr9);

/* some() */
console.log('some()')
var arr10 = [1, 2, 3, 4, 5];
var arr11 = arr10.some(function (element, index, array) {
	return element > 3;
});
console.log(arr11);

/* every() */
console.log('every()')
var arr12 = [1, 2, 3, 4, 5];
var arr13 = arr12.every(function (element, index, array) {
	return element > 3;
});
console.log(arr13);
/*  */
