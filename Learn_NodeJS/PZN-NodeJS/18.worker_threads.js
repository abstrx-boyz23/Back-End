// affdn-nrflh23 | April, 24 2022

// Create Worker Threads
let worker_threads = require("worker_threads");

worker_threads.parentPort.addListener("message", message => {
	for (let i = 0; i < message; i++) {
		console.log(`Thread ${worker_threads.threadId} send message ${i}`);
		worker_threads.parentPort.postMessage(i);
	};
	worker_threads.parentPort.close();
});

