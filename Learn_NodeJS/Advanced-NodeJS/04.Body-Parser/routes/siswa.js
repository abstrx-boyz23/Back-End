// May, 12 2022
let express = require("express");
const router = express.Router();

// Get Method
router.get("/",(req,res,next) => {
	res.status(200).json({
		message: "Get Method Siswa"
	});
});

router.get("/:absen",(req,res,next) => {
	const absen = req.params.absen;
	if (absen === "2") {
		res.status(200).json({
			nama: "Afifudin Nurfalah",
			umur: 17,
			hobi: ["Ngoding","Reading","Praying"]
		});
	} else {
		res.status(200).json({
			message: "Siswa Not Found"
		});
	}
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