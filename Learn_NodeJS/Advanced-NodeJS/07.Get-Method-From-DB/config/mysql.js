// May, 14 2022

let mysql = require("mysql");

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
	database: "sman_5_tegal"
});

con.connect(err => {
	if (err) throw err;
	console.log("Connection DB MySQL Successfully !!");
});

module.exports = {con};