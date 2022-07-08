// May, 16 2022

const Sequelize = require("sequelize");
const db = new Sequelize("sman_5_tegal", "root", "1234", {
	dialect: "mysql",
	host: "localhost",
	logging: false
});

async function testSequelize() {
	try {
	  await db.authenticate();
	  console.log('Connection to sequelize has been established successfully.');
	} catch (err) {
	  console.error('Unable to connect to the database:', err);
	}
}
testSequelize();

module.exports = db;