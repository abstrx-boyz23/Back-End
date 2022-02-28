let fs = require("fs");
let chalk = require("chalk");

// Mengecek adakah folder "data"
if (!fs.existsSync("data")) {
	fs.mkdirSync("data");
}
// Mengecek adakah file "contacts.json" di dalam folder "data"
if (!fs.existsSync("data/contacts.json")) {
	fs.writeFileSync("data/contacts.json", "[]");
}

// Menyimpan data contacts dari input user
const simpanDataContacts = (nama, no, email) => {
	const data = {nama, no, email};
	const contacts = JSON.parse(fs.readFileSync("./data/contacts.json", "utf-8"));
	
	// Mengecek apakah data contact sudah terdaftar
	const cekData = contacts.find(contact => contact.nama === nama || contact.no === no);
	
	if (cekData) {
		console.log(chalk.white.bgRed`Gagal menyimpan, maaf nama dan nomor kontak tidak boleh sama!!\n`);
		console.log(contacts, '\n');
		return false;
	}
	
	contacts.push(data);
	fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
	
	console.log(chalk.white.bgCyan`Terimakasih, data anda sudah tersimpan!!\n`);
	console.log(contacts, '\n');
}

module.exports = {simpanDataContacts};



