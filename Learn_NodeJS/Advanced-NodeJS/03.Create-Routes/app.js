// May, 11 2022

let express = require("express");
let morgan = require("morgan");
let siswaRoutes = require("./routes/siswa");
const app = express();

app.use(morgan("dev"));
app.use("/siswa", siswaRoutes.router);

module.exports = {app};