// affdn-nrflh23 | April, 24 2022

let http = require("http");

const port = 3000;
const server = http.createServer((req, res) => {
	
	res.write("Hello, this message from http server !!");
	res.end();
	
	/*
	if (req.method === "POST") {
		req.addListener("data", data => { 
			res.setHeader("Content-Type","application/json");
			res.write(data);
			res.end();
		});
	} else {
		res.write("Hello World !!");
		res.end();
	}
	*/
});

server.listen(port, () => {
	console.log(`Server port http://127.0.0.1:${port} is running...`);
},);

