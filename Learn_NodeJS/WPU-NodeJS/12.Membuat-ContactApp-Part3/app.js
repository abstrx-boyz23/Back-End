let yargs = require("yargs");
let chalk = require("chalk");

// Module contacts.js
let {saveDataContacts, listContacts, detailContact, removeContact} = require("./contacts.js");

/* Mengambil argument dari command line
console.log(yargs.argv);
console.log(process.argv);
*/

let cmd = process.argv[2];	
// if (yargs.argv.length >= 2) { console.log(chalk.yellow`Warn : Commands should not be more than one. \n`); return }
if (cmd !== undefined && cmd !== "help" && cmd !== "--help" && cmd !== "add" && cmd !== "list" && cmd !== "detail" && cmd !== "rm" && cmd !== "edit") {
	console.log(chalk.yellow`Err : The "${cmd}" command is not found. \nCheck in "node app.js --help". \n`); 
}

// Command Add
yargs.command({
	command: "add",
	describe: "Add a new contact",
	builder: {
		name: {
			describe: "Fill in your contact name.",
			demandOption: true,
			type: "string"
		},
		phone: {
			describe: "Fill in your phone number.",
			demandOption: true,
			type: "string"
		},
		email: {
			describe: "Fill in your email account",
			demandOption: false,
			type: "string"
		}
	},
	handler(argv) {
		saveDataContacts(argv.name, argv.phone, argv.email)
	}
}) 
.demandCommand()


// Command List
yargs.command({
	command: "list",
	describe: "Displays all saved contacts data (only name and phone number)",
	handler(){
		listContacts();
	}
})

// Command Detail
yargs.command({
	command: "detail",
	describe: "Display contact data in detail according to the name of the contact you are looking for.",
	builder: {
		name: {
			describe: "Fill in your contact name",
			demandOption: true,
			type: "string"
		}
	},
	handler (argv){
		// console.log(argv);
		detailContact(argv.name);
	}
})

// Command Remove
yargs.command({
	command: "rm",
	describe: "Remove contact data according to the name of the contact you are looking for.",
	builder: {
		name: {
			describe: "Fill in the name of the contact you want to remove",
			demandOption: true,
			type: "string"
		}
	},
	handler (argv){
		removeContact(argv.name)
	}
})

// Command Edit
yargs.command({
	command: "edit",
	describe: "tes",
	builder: {
		name: {
			describe: "Fill in your contact name.",
			type: "string"
		},
		phone: {
			describe: "Fill in your phone number.",
			type: "string"
		},
		email: {
			describe: "Fill in your email account",
			type: "string"
		}
	},
	handler(argv){
		if (argv.name === "" || argv.phone === "") {console.log("tes"); return} 
		if (!argv.name && !argv.phone) { console.log("tes2"); return }
		if (argv.name) console.log(argv.name);
		if (argv.phone) console.log(argv.phone);
	}
})

yargs.parse();




