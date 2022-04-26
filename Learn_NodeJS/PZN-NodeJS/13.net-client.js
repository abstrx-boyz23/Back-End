// affdn-nrflh23 | April, 23 2022

let net = require("net");

const connection = net.createConnection({port: 3000, host: "localhost"});

setInterval(() => {
	connection.write(process.argv[2]);
}, 2000);

connection.addListener("data", data => {
	console.log(`Recieve data from server : ${data.toString()}\n`);
});


