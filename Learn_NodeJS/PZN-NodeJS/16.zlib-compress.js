// affdn-nrflh23 | April, 24 2022

let zlib = require("zlib");
let fs = require("fs/promises");

// Zlib Compress
async function run() {
	const source = await fs.readFile("16.zlib-compress.js");
	console.log(source.toString());
	const result = zlib.gzipSync(source);
	console.log("\n\n\n" + result);
	
	await fs.writeFile("16.zlib-file.txt", result);
}
run();


