// @affdn-nrflh | April, 17 2022

class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	
	sayHello(){
		console.log(`Hello ${this.name}`);
	}
}

export {Person};