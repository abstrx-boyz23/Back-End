// August, 20 2022

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
const helmet = require("helmet");

const xii_ipa1 = require("./routes/xii_ipa1");
const hobbies = require("./routes/hobbies");
const app = express();

app.use(helmet());
/*
function basicAuthResponse(req) {
  return req.auth 
    ? (`Credentials ${req.auth.user} : ${req.auth.password} rejected`) 
    : "Unauthorized";
}
app.use(basicAuth({
  users: {"admin":"udin"},
  unauthorizedResponse: basicAuthResponse,
}));
*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/xii_ipa1", xii_ipa1.router);
app.use("/hobbies", hobbies.router);
app.use("/assets", express.static("assets"));

app.use("/",(res,req,next) => {
	const error = new Error("File Not Found");
	error .status = 404;
	next(error);
});

app.use((error,req,res,next) => {
  console.log(error);
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = {app};