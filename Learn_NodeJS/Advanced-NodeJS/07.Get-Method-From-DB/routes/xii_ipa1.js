// May, 14 2022
let express = require("express");
let {con} = require("../config/mysql");

const router = express.Router();


// Get Method
router.get("/",(req,res,next) => {
	const queryGet = "SELECT * FROM xii_ipa1";
	con.query(queryGet, (err, result) => {
		res.status(200).json({
			message: "Get Method Siswa",
			data: result
		});
	});
});

router.get("/:no",(req,res,next) => {
	const no = req.params.no;
	const queryGet = `SELECT * FROM xii_ipa1 WHERE No=${no}`;
	con.query(queryGet, (err, result) => {
		if (err) throw err;
		res.status(200).json({
			message: `Get Method Successfully, No.${no} Has Been Found`,
			data: result[0]
		});
	});
});

// Post Method
router.post("/",(req,res,next) => {
	const data1 = {
		nama: req.body.nama,
		hobi: req.body.hobi
	};
	res.status(200).json({
		message: "Post Method Siswa",
		data: data1
	});
});

// Put Method
router.put("/", (req, res, next) => {
	res.status(200).json({
		message: "Put Method Siswa"
	});
});

// Delete Method
router.delete("/", (req, res, next) => {
	res.status(200).json({
		message: "Delete Method Siswa"
	});
});

module.exports = {router};