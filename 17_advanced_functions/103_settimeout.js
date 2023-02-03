/* settimeout example */
function f() {
	console.log('hello');
}
setTimeout(f, 1000);
console.log('world');
// Output:
// world
// hello
// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

function showTImeEveryThreeSeconds(){
	let dateTime = new Date();
	let time = dateTime.toLocaleTimeString();
	console.log(time);

	setTimeout(showTImeEveryThreeSeconds, 3000);
}
showTImeEveryThreeSeconds();
f()
	