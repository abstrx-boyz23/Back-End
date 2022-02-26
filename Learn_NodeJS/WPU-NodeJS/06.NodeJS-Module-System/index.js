//  Macam - Macam Module System

// const fs = require("fs"); = Core Modules
// const coba = require("./coba"); Local Module
// const momment = require("momment"); // Third Party / NPM Module / node_modules

const coba = require("./coba");

// class XIIMipa1
const adhe = new coba.XIIMipa1("Adhe Maya", 1);
const amri = new coba.XIIMipa1("Amri Yahya", 22);

console.log(adhe.perkenalan());
console.log(amri.perkenalan());

console.log(coba.sayHello("Afif"));
console.log(coba.sayHello(coba.rara));
console.log("Hello World!!");


