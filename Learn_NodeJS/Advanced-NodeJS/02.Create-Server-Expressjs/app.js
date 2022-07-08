// 10, May 2022
let express = require("express");
const app = express();
const nama = "Udin";

app.use("/",(req,res,next) => {
	res
		.status(200)
		.json({
			message: "Server is listening !!",
			nama: `Mang ${nama}`
		});
});
console.log("hello");
module.exports = app;