// affdn-nrflh23 | April, 22 2022

let timers = require("timers/promises");

// Callback
setTimeout(() => {
	console.log("hello");
}, 500)

// Promise
async function running1(argument) {
	const name = await timers.setTimeout(2000, "Afif");
	console.log(`Hello ${name}`);
}
console.log("Start");
running1();
console.log("Finish");

async function running2() {
	for await (const startTime of timers.setInterval(500, new Date())) {
		console.log(`Start timer at ${new Date()}`);
	}
}
running2();

