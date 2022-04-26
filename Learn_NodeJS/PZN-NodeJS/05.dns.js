// affdn-nrflh23 | April, 19 2022

let dns = require("dns/promises");

async function run() {
	const link = await dns.lookup("www.programmerzamannow.com");
	console.log(link);
	console.log(`Link address : ${link.address}`);
	console.log(`Link family : ${link.family}`);
}
run();
