// Practice Basic ExpressJS
// author @affdn-nrflh23 | Wed, March 9 2022

import express from "express";
import expressLayouts from "express-ejs-layouts";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(expressLayouts);
// Gunakan EJS
app.set("view engine", "ejs");

// root
app.get('/', (_, res) => {
    res.render("index", {
        title: "Home", 
        name: "AFIF & RARA",
        layout: "main"
    });
});

// about
app.get('/about', (_, res) => {
    res.render("about", {
        title: "About",
        layout: "main"
    });
});

// help
app.get('/help', (_, res) => {
    res.render("help", {
        title: "Help",
        layout: "main"
    })
});

// contact
app.get('/contact', (_, res) => {
    fetch("http://localhost:3000/contacts.json")
        .then(result => result.json())
        .then(data => {
            
            res.render("contact", {
                title: "Contact",
                layout: "main",
                data
            })
        });
});

// product
app.get('/products/:id', (req, res) => {
    res.render("product", {
        title: "Product",
        layout: "main",
        req
    })
});


app.use("/", (_, res) => {
    res.status(404);
    res.send("Page Not Found\n 404");
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
