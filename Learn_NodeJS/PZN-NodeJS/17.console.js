// affdn-nrflh23 | April, 24 2022

let console = require("console");
let fs = require("fs");

// Create Console Manual
const file = fs.createWriteStream("17.file-dummy.txt");
const log = new console.Console({
	stdout: file,
	stderr: file,
});

log.info("Hello World !!");
log.error("Maaf Salah, hehe !!")

log.table({nama: "Afifudin", umur: 17})