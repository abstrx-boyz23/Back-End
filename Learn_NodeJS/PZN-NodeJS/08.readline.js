// affdn-nrflh23 | April, 22 2022

let readline = require("readline/promises");
let process = require("process");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

async function run() {
	const name = await rl.question("Hello, what is your name ? ");
	const from = await rl.question("Where are you from ? ");
	const queryPhone = await rl.question("May i have your phone number ? [yes/no] ");
	let phone;
	if (queryPhone == "yes") phone = await rl.question("What is your phone number ? ")
	
	console.log(`\nHelo, my name is ${name}`);
	console.log(`I come from ${from}`);
	if (phone !== undefined) console.log(`My number phone is ${phone}`);
	rl.close();
}
run()