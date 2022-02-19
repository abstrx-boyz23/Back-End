/*
// Kode : Protoype Inheritance Yang Salah (1)
function Employee(name) {
  this.name = name;
}
function Manager(name) {
  this.name = name;
}

Employee.prototype = Manager.prototype;

Employee.prototype.sayHello = function () {
  console.log(`Hello ${name}, my name is Employee ${this.name}`);
}
Manager.prototype.sayHello = function () {
  console.log(`Hello ${name}, my name is Manager ${this.name}`);
}

const employee = new Employee('Udin');
employee.sayHello('Eko');
const manager = new Manager('Eko');
manager.sayHello('Udin');

/* Seharusnya resultnya :
Helo Eko, my name is Employee Udin
Helo Udin, my name is Manager Eko

Tapi pada line-10 karena kode inheritance nya salah 
*/


// Kode : Protoype Inheritance Yang Benar
function Employee(name) {
  this.name = name;
}
function Manager(name) {
  // Manager.prototype = Object.create(Employee.prototype)
  this.name = name;
}

Employee.prototype = Object.create(Manager.prototype);

Employee.prototype.sayHello = function () {
  console.log(`Hello ${name}, my name is Employee ${this.name}`);
}
Manager.prototype.sayHello = function () {
  console.log(`Hello ${name}, my name is Manager ${this.name}`);
}

const employee = new Employee('Udin');
employee.sayHello('Eko');
const manager = new Manager('Eko');
manager.sayHello('Udin');

console.log(employee);
console.log(manager);















