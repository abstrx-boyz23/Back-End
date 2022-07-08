// May, 11 2022

let http = require("http");
let app = require("./app");
let express = require("express");
let app1 = express();

const port = process.env.PORT || 3000;
const server = http.createServer(app.app);

server.listen(port, () => {
	console.log(`Server port ${port} is listening...`);
});