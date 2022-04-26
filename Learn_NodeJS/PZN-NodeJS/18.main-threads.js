// affdn-nrflh23 | April, 24 2022

// Create Main Thread
let worker_threads = require("worker_threads");

// console.log(worker_threads);
const worker1 = new worker_threads.Worker("./18.worker_threads.js");
const worker2 = new worker_threads.Worker("./18.worker_threads.js");

worker1.addListener("message", message => {
	console.log(`Thread ${worker_threads.threadId} recieve message : ${message}`);
});
worker2.addListener("message", message => {
	console.log(`Thread ${worker_threads.threadId} recieve message : ${message}`);
});


worker1.postMessage(10);
worker2.postMessage(5);

