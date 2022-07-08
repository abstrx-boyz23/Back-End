// May, 16 2022
const model = require("../config/model/index");
const controller = {};

// Make MySQL Query With The Help Of Sequelize
// findAll, create, update, destroy

// Get Method
controller.getAll = async (req, res, next) => {
	try {
		const result = await model.xii_ipa1.findAll()
		if (result.length === 0) {
			res.status(200).json({
				message: "Get Method Failed, Data Not Found",
				data: result
			});
		};
		
		res.status(200).json({
			message: "Get Method Successfully",
			data: result
		});
		
	} catch (err) {
		res.status(200).json({
			message: err
		});
	}	
};

// Get Data By No.Absen
controller.getOne = async function (req, res, next) {
	try {
		const result = await model.xii_ipa1.findAll({
			where: {
				no: req.params.no
			}
		});
		
		if (result.length === 0) {
			res.status(200).json({
				message: `Get Method Successfully, No.${req.params.no} Not Found`,
				data: result[0]
			});
		}
		
		res.status(200).json({
			message: `Get Method Successfully, No.${req.params.no} Has Been Found`,
			data: result[0]
		});
		
	} catch (err) {
		res.status(404).json({
			message: err,
		});
	}
}

// Post Method
controller.post = async function (req, res, next) {
	try {
		const result = await model.xii_ipa1.create({
			nama: req.body.nama,
			hobi: req.body.hobi,
			no: req.params.no
		});
		res.status(201).json({
			message: "Post Method Siswa Successfully",
			data: {
				no: req.params.no,
				nama: req.body.nama,
				hobi: req.body.hobi
			}
		});
		
	} catch (err) {
		res.status(404).json({
			message: err
		});
	}
}

// Put Method
controller.put = async function (req, res, next) {
	try {
		const nama = req.body.nama
		const hobi = req.body.hobi
		const no = req.params.no
		const result = await model.xii_ipa1.update({
			nama: req.body.nama,
		},{ 
			where: {
				no: req.params.no
			}
		});
		res.status(200).json({
			message: `Put Method Siswa No.${req.params.no} Successfully`
		});
			
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}
controller.delete = async function (req, res, next) {
	try {
		const result = await model.xii_ipa1.destroy({
			where: {
				no: req.params.no
			}
		});
		res.status(200).json({
			message: `Delete Method Siswa No.${req.params.no} Successfully`
		});
		
	} catch (err) {
		res.status(404).json({
			message: err,
		});
	}
}

module.exports = controller;