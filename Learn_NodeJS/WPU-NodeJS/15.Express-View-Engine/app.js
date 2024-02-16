// ExpressJS Template-Engine (pakai EJS)
// author @affdn-nrflh23 | Mon, March 14 2022

const express = require('express');
const app = express();
const port = 3000;

// expressLayouts hanya mempermudah EJS
const expressLayouts = require("express-ejs-layouts");
const fs = require("fs");


const data = JSON.parse(fs.readFileSync("./products.json", "utf-8"));
// Aktifkan EJS-nya
app.set("view engine", "ejs");
app.use(expressLayouts);

// root
app.get('/', (req, res) => {
	res.render("index", {
		title: "Home Page", 
		maker: "Created by handsome boy from Ipa 1",
		data,
		layout: "main-layout"
	});
});

// apidata
app.get('/apidata', (req, res) => {
	res.json(data);
});

// about
app.get('/about', (req, res) => {
	res.render("about", { 
		title: "About Page",
		layout: "main-layout"
	});
});

// help
app.get('/help', (req, res) => {
	res.render("help", { 
		title: "Help Page",
		layout: "main-layout"
	});
});

// ==== Req ====

// Params
// app.get('/products/:id', (req, res) => {
//   res.send(`Product ID : ${req.params.id}`)
// });
// app.get('/products/:id/category/:idCat', (req, res) => {
//   res.send(`Product ID : ${req.params.id} <br /> Category ID : ${req.params.idCat}`);
// }); // cara manggilnya /products/23/category/sepatu

// Query
app.get('/products/:id', (req, res) => {
	res.send(`Product ID : ${req.params.id} <br /> Category ID : ${req.query.category}`);
}); // cara manggilnya /products/23?category=shoes

app.use("/", (req, res) => {
	res.status(404);
	res.send("Page Not Found\n 404")
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}...`);
});