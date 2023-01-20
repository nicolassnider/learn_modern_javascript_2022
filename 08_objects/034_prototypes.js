function Person() {
	this.name='Will';
	this.age=30;
}

Person.prototype.getName=function(){
	return this.name;
}
Person.prototype.setName=function(name){
	this.name=name;
}


const person1=new Person();
person1.setName('John');
const person2=new Person();

console.log(person1);