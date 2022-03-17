// Practice Basic ExpressJS
// author @affdn-nrflh23 | Wed, March 9 2022

const express = require('express');
const app = express();
const port = 3000;

// root
app.get('/', (req, res) => {
  // res.send('Welcome to ExpressJS, Afif!!');
  res.sendFile('./docs/index.html', {root: __dirname});
  
});

// apidata
app.get('/apidata', (req, res) => {
  /*
  res.send('Hello, this is a page about!!');
  res.json({
  	nama: "Afifudin Nurfalah",
  	kls: "12 Mipa 1",
  });
  */
  res.sendFile("./docs/contacts.json", {root: __dirname});
});

// about
app.get('/about', (req, res) => {
  // res.send('Hello, this is a page about!!');
  res.sendFile("./docs/about.html", {root: __dirname});
});

// help
app.get('/help', (req, res) => {
  // res.send('Hello, this is a page help!!');
  res.sendFile("./docs/help.html", {root: __dirname});
});

// ==== Req ====
// Query

// app.get('/products/:id', (req, res) => {
//   res.send(`Product ID : ${req.params.id}`)
// });

// app.get('/products/:id/category/:idCat', (req, res) => {
//   res.send(`Product ID : ${req.params.id} <br /> Category ID : ${req.params.idCat}`);
// });

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
