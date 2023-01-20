/* array sorting */

/* sort array in ascending order */
var arr2 = [1, 2, 3, 4, 5];
console.log(arr2.sort()); // [1, 2, 3, 4, 5]


/* compare function */
function compare(a, b) {
	  if (a < b) {
	return -1;
  }
  if (a > b) {
	return 1;
  }
  return 0;
}

let ar=[100,20,40,50,8]
console.log(ar.sort(compare))
console.log(ar.sort((a,b)=>a-b))
console.log(ar.sort((a,b)=>b-a))

