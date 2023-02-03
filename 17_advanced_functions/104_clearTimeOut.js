let count=0;
function increaseCount(){
	count +=1
	console.log(count);
}
let id = setInterval(increaseCount, 1000);
clearTimeout(id);
console.log(`id: ${id} when stopped`)
