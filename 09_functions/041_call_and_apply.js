let name1={
	firstName:'John',
	lastName:'Doe',
	fullName:function(){
		console.log(this.firstName+' '+this.lastName);
	}
}

name1.fullName();

let name2={
	firstName:'Monica',
	lastName:'Geller'
}
name1.fullName.call(name2);

let fullName = function(city,state){
	console.log(this.firstName+' '+this.lastName+' '+city+' '+state);
}
let name3 = {
	firstName:'Chandler',
	lastName:'Bing'
}
fullName.apply(name3,['New York','NY'])