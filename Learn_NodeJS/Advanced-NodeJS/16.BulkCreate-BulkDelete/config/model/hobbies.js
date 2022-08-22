// August, 20 2022
const Sequelize = require("sequelize");
const db = require("../database/mysql");

const hobbies = db.define("hobbies", {
	kd_hobi: {type: Sequelize.STRING},
	nama_hobi: Sequelize.STRING,
}, 
{
	freezeTableName: true,
	timestamps: false,
});

hobbies.removeAttribute("id");
module.exports = hobbies;