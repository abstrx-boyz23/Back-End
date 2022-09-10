// load the package we need 
const express = require("express");
const app = express();

// set view engine to "ejs"
app.set("view engine","ejs");

// Use res.render to load up an ejs view

// index page
app.get("/", (req, res) => {
    res.render("pages/index")
});

// about page
app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.listen(3000, () => {
    console.log("Server port 3000 is listening..");
})