/* type convertions */

let val;

// number to string
val = String(555);
val = String(4+4);

// boolean to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// string to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// output
console