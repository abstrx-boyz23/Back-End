// May, 13 2022

let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");

let siswaRoutes = require("./routes/xii_ipa1");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use("/xii_ipa1", siswaRoutes.router);

app.use((res,req,next) => {
	var error = new Error("File Not Found");
	error .status = 404;
	next(error);
});

app.use((error,req,res,next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = {app};