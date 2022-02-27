let fs = require("fs");
let readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
// Mengecek adakah folder "data"
if (!fs.existsSync("data")) {
	fs.mkdirSync("data");
}
// Mengecek adakah file "contacts.json" di dalam folder "data"
if (!fs.existsSync("data/contacts.json")) {
	fs.writeFileSync("data/contacts.json", "[]");
}

// Membuat input data contact untuk user 
const inputDataContact = pertanyaan => {
	return new Promise((resolve, reject) => {
		rl.question(pertanyaan, result => {
			resolve(result);
		});
	});
}

// Menyimpan data contacts dari input user
const simpanDataContacts = (nama, no, email) => {
	const data = {nama, no, email};
	var contacts = JSON.parse(fs.readFileSync("./data/contacts.json", "utf-8"));
	contacts.push(data);
	fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
	
	console.log("\nData terkirim!");
	console.log(contacts);
	rl.close();
}

module.exports = {inputDataContact, simpanDataContacts};



