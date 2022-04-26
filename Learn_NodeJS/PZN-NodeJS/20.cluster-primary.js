// affdn-nrflh23 | April, 24 2022

// Create Cluster Primary
let os = require("os");
let process = require("process");
let http = require("http");
let cluster = require("cluster");

// Code For Cluster Primary
if (cluster.isPrimary) {
	console.log(`Primary : ${process.pid}`);
	for (let i = 0; i < os.cpus().length; i++) {
		cluster.fork();
	}
	cluster.addListener("exit", worker => {
		console.log(`Worker ${worker.id} is exited !!`);
		cluster.fork();
	});
}

// Code For Cluster Worker
if (cluster.isWorker) {
	console.log(`Worker : ${process.pid}`);
	
	const server = http.createServer((req,res) => {
		res.write(`Response from process ${process.pid}`);
		res.end();
		process.exit();
	});
	server.listen(3000)
}


