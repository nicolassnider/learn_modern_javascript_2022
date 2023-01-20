/* if else */
var a = 10;
if (a > 10) {
	  console.log('a is greater than 10');
}
else if (a < 10) {
	  console.log('a is less than 10');
}
else {
	  console.log('a is equal to 10');
}


/* switch */
var b = 10;
switch (b) {
	  case 10:
	console.log('b is equal to 10');
	break;
	  case 20:
	console.log('b is equal to 20');
	break;
	  default:
	console.log('b is not equal to 10 or 20');
}

/* ternary operator */
var c = 10;
var d = c > 10 ? 'c is greater than 10' : 'c is less than or equal to 10';
console.log(d);
