// affdn-nrflh23 | April, 15 2022

// Create Symbol
const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "Afifudin";
person[lastName] = "Nurfalah";

console.log(person);
console.log(person[firstName]);
console.log(person[lastName]);

// Symbol.for()
person[Symbol.for("friend")] = "Rara";
console.log(person);
console.log(person[Symbol.for("friend")]);




