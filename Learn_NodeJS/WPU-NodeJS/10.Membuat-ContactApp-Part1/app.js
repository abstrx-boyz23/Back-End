// let contacts = require("./contacts.js");
let {inputDataContact, simpanDataContacts} = require("./contacts.js");


// Function Utama
const main = async () => {
	const nama = await inputDataContact("Masukan nama anda : ");
	const no = await inputDataContact("Masukan nomor anda : ");
	const email = await inputDataContact("Masukan email anda : ");
	
	simpanDataContacts(nama, no, email);
}

main();

// Cara salah (krn menggunakan function callback)
/*
rl.question("Masukan nama kontak : ", nama => {
	rl.question("Masukan nomor kontak : ", no => {
		const data = {nama, no};
		const contacts = JSON.parse(fs.readFileSync("./data/contacts.json", "utf-8"));
		contacts.push(data);
		fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
		
		console.log("\nData terkirim!");
		console.log(contacts);
		rl.close();
	});
});
*/