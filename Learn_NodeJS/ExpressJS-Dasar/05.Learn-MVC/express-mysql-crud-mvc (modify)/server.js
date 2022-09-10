// August, 24 2022

const express = require("express");
const app = express();
var methodOverride = require("method-override");
const path = require("path");

// Connection DB
const con = require("./config/db.js");
const db = require("./config/db_penduduk");


// Using pug template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// connecting route to database
app.use("/biodata", (req, res, next) => {
  req.con = con;
  next();
});
app.use("/penduduk", (req, res, next) => {
  req.db = db;
  next();
});

// parsing body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// include router
const biodataRouter = require("./routes/biodataRouter");
const pendudukRouter = require("./routes/pendudukRouter");

// routing
app.use("/biodata", biodataRouter);
app.use("/penduduk", pendudukRouter);

// starting server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
