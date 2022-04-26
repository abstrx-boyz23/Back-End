// affdn-nrflh23 | April, 19 2022

let fs = require("fs/promises");

async function running() {
	const file = await fs.readFile("03.file-system.js", "utf-8");
	console.log(file);
}
running();