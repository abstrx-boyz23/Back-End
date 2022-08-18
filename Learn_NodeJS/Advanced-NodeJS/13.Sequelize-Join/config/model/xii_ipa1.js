// August, 10 2022
const Sequelize = require("sequelize");
const db = require("../database/mysql");
const hobbies = require("./hobbies");

const xii_ipa1 = db.define("xii_ipa1", {
	no: Sequelize.INTEGER,
	nama: Sequelize.STRING,
	kd_hobi: Sequelize.STRING,
	alamat: Sequelize.STRING,
}, 
{
	freezeTableName: true,
	timestamps: false
});

// xii_ipa1.hasOne(hobbies, {foreignKey: "kd_hobi"});
// xii_ipa1.belongsTo(hobbies, {foreignKey: "kd_hobi"});

xii_ipa1.removeAttribute("id");
module.exports = xii_ipa1;