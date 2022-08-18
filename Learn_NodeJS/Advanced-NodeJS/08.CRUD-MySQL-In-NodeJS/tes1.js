let mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
	database: "sman_5_tegal"
});

db.connect(err => {
	if (err) throw err;
	console.log("Connection Successfully");
});

const queryGet = `START TRANSACTION; UPDATE xii_ipa1 SET Nama="tes1" Hobi="tes1" WHERE No=3; INSERT INTO xii_ipa1 VALUES (4, "tes2", "tes2"); COMMIT;`;
db.query(queryGet, (err,result) => {
	if (err) throw err;
	console.log(result);
});