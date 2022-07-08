// May, 16 2022
const Sequelize = require("sequelize");
const db = require("../database/mysql");

const xii_ipa1 = db.define("xii_ipa1", {
	no: Sequelize.INTEGER,
	nama: Sequelize.STRING,
	hobi: Sequelize.STRING
}, 
{
	freezeTableName: true,
	timestamps: false
});

xii_ipa1.removeAttribute("id");
module.exports = xii_ipa1;