// May, 16 2022
const model = require("../config/model/index");
const { Op } = require("sequelize");
const controller = {};
const db = require("../config/database/mysql");

// Make MySQL Query With The Help Of Sequelize
// findAll, create, update, destroy

// Get Method
controller.getAll = async (req, res, next) => {
	try {
    const result = await db.query("select No,nama,alamat,kd_hobi,nama_hobi from xii_ipa1 inner join hobbies using (kd_hobi)");
    console.log(result[0]);
		
		/*
		const result = await model.xii_ipa1.findAll({
			attributes: ["no","nama","alamat","kd_hobi"],
			order: [["no","ASC"]],
			/*where: {
				no: {[Op.between]: [3,5]}
			}*/
		//});
    
		if (result.length === 0) {
			res.status(200).json({
				message: "Get Method Successfully, Data Empty",
				data: result[0]
			});
			return;
		}
      	
		res.status(200).json({
      message: "Get Method Successfully",
			data: result[0]
		});
		
	} catch (err) {
		res.status(200).json({
			message: err.message
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
				message: `Get Method Failed, No.${req.params.no} Not Found`,
				data: result
			});
			return;
		} 
		res.status(200).json({
			message: `Get Method Successfully, No.${req.params.no} Has Been Found`,
			data: result[0]
		});
    	
	} catch (err) {
		res.status(404).json({
			message: err.message
		});
	}
};

// Get Data By Search Keyword
controller.getSearchKeyword = async function (req, res, next) {
	try {
		const keyword = req.query.keyword;
		const result = await model.xii_ipa1.findAll({
			where: {
				[Op.or]: [{
					no: {
						[Op.like]: "%"+keyword+"%" // fungsi % untuk dapat dibaca pada link
					}
				},{
					nama: {
						[Op.like]: "%"+keyword+"%"
					}
				}]
			},
			order: [["no","ASC"]]
		});
      	
		if (result.length === 0) {
			res.status(200).json({
				message: `Get Method Failed, Keyword "${keyword}" Not Found`,
				data: result
			});
			return;
		}
      
		res.status(200).json({
			message: `Get Method Successfully, Keyword "${keyword}" Has Been Found`,
			data: result
		});
      
	} catch (err) {
		res.status(404).json({
			message: err.message
		});
	}
};

// Post Method
controller.post = async function (req, res, next) {
	try {
		const nama = req.body.nama;
		const kd_hobi = req.body.kd_hobi;
		const alamat = req.body.alamat;
		const resultAll = JSON.parse(JSON.stringify(await model.xii_ipa1.findAll({
			order: [["no","ASC"]]
		})));
      
		const createNewRow = async (i) => {
			const result = await model.xii_ipa1.create({no: i, nama, kd_hobi, alamat});
			res.status(201).json({
				status: "Post Method Success",
				message: "Data Siswa Has Been Added",
				newData: {no: i, nama, kd_hobi, alamat}
			});
		};
		if (!nama) {
      res.status(200).json({
        status: "Post Method Failed",
        message: `Nama Must Be Filled`
      });
      return;
	  }
		
		if (resultAll.length === 0) {
			createNewRow(1);
		  return;
		}
      
    for (let i = 0; i < resultAll.length; i++) {
      for (let i = 0; i < resultAll.length; i++) {
        if (resultAll[i].nama.toLowerCase() === nama.toLowerCase()) {
          res.status(200).json({
            status: "Post Method Failed",
            message: `Nama '${nama}' Has Been Available`
          });
        return;
        }
      }
      
			if (resultAll[i].no > i+1) {
				createNewRow(i+1);
				return;
			} else if (resultAll.length === i+1) {
				createNewRow(resultAll.length +1);
			} 
		}
      
	} catch (err) {
		console.log(err);
		res.status(404).json({
			message: err.message
		});
	}
};

// Put Method
controller.put = async function (req, res, next) {
	try {
		const nama = req.body.nama;
		const kd_hobi = req.body.kd_hobi;
		const alamat = req.body.alamat;
		const no = req.params.no;
      
		const resultAll = await model.xii_ipa1.findAll({order: [["no","ASC"]]});
		const resultGetOne = await model.xii_ipa1.findAll({
			where: {no},
			order: [["no","ASC"]]
		});
		
    if (resultGetOne.length === 0) {
      res.status(200).json({
        status: "Put Method Failed",
        message: `No.'${no}' Not Found`
      });
      return;
    }
      
		for (let i = 0; i < resultAll.length; i++) {
		  if (resultAll[i].nama === nama) {
        res.status(200).json({
          status: "Put Method Failed",
          message: `Nama '${nama}' Has Been Available`
        });
        return;
      }
		}
      
    const result = await model.xii_ipa1.update({nama, kd_hobi, alamat},{ 
      where: {no}
    });
    res.status(200).json({
      message: `Put Method Siswa No.${no} Successfully`,
      newData: {nama, kd_hobi, alamat}
    });
      
	} catch (err) {
	  console.log(err);
		res.status(404).json({
			message: err.message
		});
	}
};

// Delete Method
controller.delete = async function (req, res, next) {
	try {
		const result = await model.xii_ipa1.destroy({where: {no: req.params.no}});
		if (result == 0) {
      res.status(200).json({
        status: "Delete Method Failed",
        message: `Siswa No.${req.params.no} Not Found`
      });
      return;
		}
		res.status(200).json({
      status: "Delete Method Success",
			message: `Siswa No.${req.params.no} Has Been Deleted`
		});
      
	} catch (err) {
		res.status(404).json({
			message: err,
		});
	}
};

module.exports = controller;