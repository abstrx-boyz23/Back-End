// affdn-nrflh23 | April, 22 2022

// Report bukan standard library melainkan sebuah fitur
let process = require("process");

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "09.report.json"

function test() {
	throw new Error("Hehe");
}
test();

/*
command line : 
node --report-uncaught-exception --report-on-signal 
--report-on-fatalerror app.js

*/





