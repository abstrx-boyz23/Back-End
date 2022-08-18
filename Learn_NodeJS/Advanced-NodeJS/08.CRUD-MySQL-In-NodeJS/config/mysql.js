// May, 15 2022
let mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
	database: "sman_5_tegal",
	multipleStatements: true
});

db.connect(err => {
	if (err) throw err;
	console.log("Connection DB MySQL Successfully !!");
});

module.exports = {db};