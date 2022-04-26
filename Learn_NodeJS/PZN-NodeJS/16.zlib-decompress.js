// affdn-nrflh23 | April, 24 2022

let zlib = require("zlib");
let fs = require("fs/promises");

async function run() {
	const source = await fs.readFile("16.zlib-file.txt");
	const result = (zlib.unzipSync(source)).toString();
	console.log(result);
	
	await fs.writeFile("16.zlib-file.txt", result);
}
run()