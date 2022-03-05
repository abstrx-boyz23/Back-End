let fs = require("fs");
let chalk = require("chalk");
let validator = require("validator");

// Check the "data" folder.
if (!fs.existsSync("data")) { fs.mkdirSync("data") }

// Check file "contacts.json" in "data" folder.
if (!fs.existsSync("data/contacts.json")) { fs.writeFileSync("data/contacts.json", "[]")}

const success = chalk.black.bgHex("#78d00f");
const failed = chalk.white.bgHex("#d81c1c");
const attention = chalk.bgHex("#d8d113").black;

// Function loadContacts => fetch data from file "contacts.json".
const loadContacts = () => {
	const contacts = JSON.parse(fs.readFileSync("./data/contacts.json", "utf-8"));
	return contacts;
}

// Function saveDataContacts => saving contact data from user command.
const saveDataContacts = (name, phone, email) => {
	// Check validation data from user command.
	if (name === "" || phone === "") { console.log(failed`Failed: Name or phone number cannot be empty. \n`); return false }
	if (!validator.isMobilePhone(phone, "id-ID")) { console.log(failed`Failed: Phone number is not valid. \n`); return false }
	if (email) { 
		if (!validator.isEmail(email)) { console.log(failed`Failed: Email account is not valid. \n`); return false }
	}
	const contacts = loadContacts();
	
	// Check the name and phone number cannot be the same.
	const result = contacts.find(contct => contct.name.toLowerCase() === name.toLowerCase() || contct.phone === phone)
	if (result) { console.log(failed`Failed: Name or phone number cannot be the same as the data already stored\n`); return false }
	
	const data = {name, phone, email};
	contacts.push(data);
	fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
	
	console.log(success`Success: Your data contacts has been saved.\n`);
	console.log(contacts, '\n');
}

// Function listContacts => displays a list of all saved contact data.
const listContacts = () => {
	const contacts = loadContacts();
	
	// When the contact list is empty.
	if (contacts.length === 0) { console.log(chalk.bold.bgHex("#8818b4")`<<< Empty >>> \n`); return false }
	
	console.log(attention`The following contacts data has been successfully saved : \n`);
	contacts.forEach((contct, i) => console.log(`${i+1}. Name : ${contct.name} , phone : ${contct.phone}`))
}

// Function detailContact => display contact data in detail according to the name of the contact you are looking for.
const detailContact = name => {
	const contacts = loadContacts();
	const result = contacts.find(contct => contct.name === name);
	// Check the name of the contact you are looking for.
	if (!result) { console.log(failed`Failed: The contact name you are looking for was not found. \n`); return false }

	// Show details.
	console.log(success`Success: Contact name "${name}" has been found. \n`);
	console.log(`Details contact data : `);
	console.log(`1. Nama  = ${result.name}`);
	console.log(`2. No    = ${result.phone}`);
	if (result.email) console.log(`3. Email = ${result.email}`);
}

// Function removeContact => remove contact data according to the name of the contact you are looking for.
const removeContact = name => {
	const contacts = loadContacts();
	// Check the name of the contact you are looking for.
	if (!contacts.find(contct => contct.name === name)) { console.log(failed`Failed: The name of the contact you want to delete is not found. \n`); return false }
	const newContacts = contacts.filter(contct => contct.name !== name);
	fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));
	console.log(success`Success: Data contacts "${name}" has been deleted. \n`);
}

/* Coming Soon:
1. rename / edit data
2. 
*/

module.exports = {saveDataContacts, listContacts, detailContact, removeContact};
