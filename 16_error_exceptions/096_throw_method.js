/* trycatch throw example  */
function f() {
	try {
	let number = 100;
	if (number > 50) {
		console.log('its ok');
	}
	else{
		throw new Error('number is less than 50');
	}}
	catch (e) {
		console.log(e);
	}
}