// May, 14 2022

let mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
	database: "sman_5_tegal"
});

connection.connect(err => {
	if (err) throw err;
	console.log("Connection DB MySQL Successfully !!");
});

module.exports = {connection};