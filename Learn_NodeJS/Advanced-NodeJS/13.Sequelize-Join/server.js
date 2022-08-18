// May, 16 2022

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app.app);
server.listen(port, () => {
	console.log(`Server port ${port} is listening...`);
});