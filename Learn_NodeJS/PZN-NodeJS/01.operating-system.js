// affdn-nrflh23 | April, 19 2022

let os = require("os");

console.log(`OS.Platform : ${os.platform()}`);
console.log(`OS.Arch : ${os.arch()}`);
console.table(os.cpus());
console.log(`OS.Uptime : ${os.uptime()}`);
console.log(`OS.Totalmem : ${os.totalmem()}`);
console.log(`OS.Freemem : ${os.freemem()}`);
console.table(os.networkInterfaces());







