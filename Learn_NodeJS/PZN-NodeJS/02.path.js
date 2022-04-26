// affdn-nrflh23 | April, 21 2022

let path = require("path");
const file = "/main-folder/folder1/folder2/contoh.html";

console.log(path.sep);
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
console.table(path.parse(file));
console.log(path);
