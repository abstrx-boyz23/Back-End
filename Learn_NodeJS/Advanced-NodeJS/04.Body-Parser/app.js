// May, 12 2022

let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");

let siswaRoutes = require("./routes/siswa");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use("/siswa", siswaRoutes.router);

module.exports = {app};


