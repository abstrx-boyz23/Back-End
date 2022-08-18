// May, 16 2022

const Sequelize = require("sequelize");
const db = new Sequelize("sman_5_tegal", "root", "1234", {
	dialect: "mysql",
	host: "localhost",
});


module.exports = db;