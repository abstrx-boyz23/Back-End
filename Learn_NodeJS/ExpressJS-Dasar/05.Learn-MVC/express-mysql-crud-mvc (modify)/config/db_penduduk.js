var mysql = require("mysql");

module.exports = mysql.createConnection({
    host: "localhost",
    password: "1234",
    user: "root",
    database: "penduduk"
})