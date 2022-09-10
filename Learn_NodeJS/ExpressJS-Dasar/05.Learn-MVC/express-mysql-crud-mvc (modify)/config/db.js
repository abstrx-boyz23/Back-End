const mysql = require("mysql");
require("dotenv").config();

module.exports = mysql.createConnection({
  /*host: "localhost",
  user: "root",
  password: "1234",
  database: "biodata"*/
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
