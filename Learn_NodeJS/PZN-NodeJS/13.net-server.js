// affdn-nrflh23 | April, 23 2022

let net = require("net");

const server = net.createServer(client => {
	console.log("Client Connected !!\n");
	client.on("data", data => {
		console.log(`Recieve data from client : ${data.toString()}\n`);
		client.write(`Hello ${data.toString()}`);
	});
});

server.listen(3000, () => {
	console.log(`Example app listening on port 3000...`);
});


