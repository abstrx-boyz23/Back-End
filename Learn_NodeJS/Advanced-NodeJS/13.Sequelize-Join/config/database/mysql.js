// May, 16 2022

const Sequelize = require("sequelize");
const db = new Sequelize("sman_5_tegal", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
});

async function run() {
  const result = await db.query("select No,nama,alamat,kd_hobi,nama_hobi from xii_ipa1 inner join hobi using (kd_hobi)");
  console.log(result);
}
run();
module.exports = db;
