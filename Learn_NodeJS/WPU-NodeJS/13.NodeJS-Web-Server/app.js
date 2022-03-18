// Membuat Web Server
// author @affdn-nrflh23 | Sun, March 13 2022

let http = require("http");
let fs = require("fs");

const port = 3000;

const renderFile = (path, res) => {
	// fs.readFile(path, "utf-8", (err, data) => {
	// 	if (err) {
	// 		res.writeHead(404);
	// 		res.write("<h1>404 <br />Error : File Not Found</h1>");
	// 	} else {
	// 		res.write(data);
	// 		console.log(data);
	// 	}
	// 	res.end();
	const data = fs.readFileSync(path, "utf-8");
	res.write(data);
};


http
	.createServer((req, res) => {
		res.writeHead(200, {
			"Content-Type": "text/html"
		});
		
		const url = req.url;
		switch (url) {
			case "/":
				// res.write("<h1>Selamat Datang Kembali Afif !!</h1>");.
				renderFile("./docs/index.html", res);
				break;
			case "/contact":
				// res.write("<h1>Ini adalah halaman CONTACT</h1>");
				renderFile("./docs/contact.html", res);
				break;
			case "/about":
				// res.write("<h1>Ini adalah halaman ABOUT</h1>");
				renderFile("./docs/about.html", res);
				break;
			default:
				res.write("<h1>404 <br /> Page Not Found!</h1>");
				break;
		}
		
		res.end();
	})
	.listen(port, () => {
		console.log(`Server is listening on port ${port}...`);
	})


