// affdn-nrflh23 | April, 22 2022

let process = require("process");

process.addListener("exit", exitCode => {
	console.log(`NodeJS exit with code ${exitCode}`);
});

console.log(`Process Version: ${process.version}`);
console.log(`Process Architecture: ${process.arch}`);  
console.log(`Process PID: ${process.pid}`);  
console.log(`Process Platform: ${process.platform}`);  
console.log(process.report);
console.log("\n\n\n");  
console.log(process.env);  
console.log(`Process Argv: ${process.argv}`);  

process.exit(9494);
console.log(`Kode ini tidak dijalankan karena sudah exit`);
