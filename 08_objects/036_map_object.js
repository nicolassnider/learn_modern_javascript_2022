

/* map object example */
var map1 = new Map();
map1.set('a', 10);
map1.set('b', 20);
map1.set('c', 30);
console.log(map1);
console.log(map1.get('a'));
console.log(map1.size);
console.log(map1.has('a'));
console.log(map1.keys());
console.log(map1.values());
console.log(map1.entries());
for(const [k, v] of map1){
	console.log(k, v);
}
map1.delete('a');
console.log(map1);
map1.clear();
console.log(map1);
/*  */
/*  */