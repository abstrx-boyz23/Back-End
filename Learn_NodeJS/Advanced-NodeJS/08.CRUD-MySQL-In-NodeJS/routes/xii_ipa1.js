// May, 15 2022
let express = require("express");
let {db} = require("../config/mysql");
const router = express.Router();

// Get Method
router.get("/",(req,res,next) => {
	const queryGet = "SELECT * FROM xii_ipa1";

	db.query(queryGet, (err, result) => {
		res.status(200).json({
			message: "Get Method Siswa Successfully",
			data: result
		});
	});
});

router.get("/search",(req,res,next) => {
	const no = req.query.no;
	const queryGet = `SELECT * FROM xii_ipa1 WHERE no=${no}`;
	db.query(queryGet, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			message: `Get Method Successfully, No.${no} Has Been Found`,
			data: result[0]
		});
	});
});

// Post Method
router.post("/:no",(req,res,next) => {
	const nama = req.body.nama;
	const hobi = req.body.hobi;
	const no = req.params.no;
	
	const queryPost = `INSERT INTO xii_ipa1 VALUES (${no}, "${nama}", "${hobi}")`
	db.query(queryPost, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			message: "Post Method Siswa Successfully",
			data: {
				nama: nama,
				hobi: hobi
			}
		});
	});
});

// Put Method
router.put("/:no", (req, res, next) => {
	const namaBaru = req.body.nama;
	const hobiBaru = req.body.hobi;
	const no = req.params.no;
	
	let queryPut;
	// Condition queryPut
	if (namaBaru && hobiBaru) queryPut = `UPDATE xii_ipa1 SET nama="${namaBaru}", hobi="${hobiBaru}" WHERE no=${no};`;
	if (namaBaru) queryPut = `UPDATE xii_ipa1 SET nama="${namaBaru}" WHERE no=${no};`;
	if (hobiBaru) queryPut = `UPDATE xii_ipa1 SET hobi="${hobiBaru}" WHERE no=${no};`;
	
	db.query(queryPut, (err,result) => {
		if (err) throw err;
		res.status(200).json({
			message: `Put Method Siswa No.${no} Successfully`
		});
	});
});

// Delete Method
router.delete("/:no", (req, res, next) => {
	const no = req.params.no;
	const queryDelete = `DELETE FROM xii_ipa1 WHERE no=${no}`;
	db.query(queryDelete, (err, result) => {
		res.status(200).json({
			message: `Delete Method Siswa No.${no} Successfully`
		});
	});
});

module.exports = {router};