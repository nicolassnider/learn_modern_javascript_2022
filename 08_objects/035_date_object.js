/* date object examples */

// date object
var today = new Date();
console.log(today);

var birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');
console.log(birthday);

var birthday = new Date('9-10-1981 11:25:00');
// get month
console.log(birthday.getMonth());

// get date
console.log(birthday.getDate());

// get day
console.log(birthday.getDay());

// get year
console.log(birthday.getFullYear());

// get hours
console.log(birthday.getHours());

// get minutes
console.log(birthday.getMinutes());

// get seconds
console.log(birthday.getSeconds());

// get milliseconds
console.log(birthday.getMilliseconds());

// get time
console.log(birthday.getTime());

// set month
birthday.setMonth(2);
console.log(birthday);

// set date
birthday.setDate(12);
console.log(birthday);

// set year
birthday.setFullYear(1985);
console.log(birthday);

// set hours
birthday.setHours(3);
console.log(birthday);

// set minutes
birthday.setMinutes(30);
console.log(birthday);

// set seconds
birthday.setSeconds(25);
console.log(birthday);

// set milliseconds
birthday.setMilliseconds(1);
console.log(birthday);

// set time
birthday.setTime(0);
console.log(birthday);

// date math
var today = new Date();
var birthday = new Date('9-10-1981 11:25:00');
var diff = today.getTime() - birthday.getTime();
console.log(diff);

var diffYears = diff / (1000 * 60 * 60 * 24 * 365);
console.log(diffYears);

var diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
console.log(diffYears);

// convert to date object
var diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
var age = new Date(diffYears * 1000 * 60 * 60 * 24 * 365);
console.log(age);

// convert to date object
var diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
var age = new Date(diffYears * 1000 * 60 * 60 * 24 * 365);