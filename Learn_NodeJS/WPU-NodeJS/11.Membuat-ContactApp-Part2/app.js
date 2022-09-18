let yargs = require("yargs");

// Module contacts.js
let { simpanDataContacts } = require("./contacts.js");

/* Mengambil argument dari command line
console.log(process.argv);
console.log(yargs.argv);
*/

yargs.command({
  command: "add",
  describe: "Menambahkan kontak baru",
  builder: {
    nama: {
      describe: "Isi nama kontak anda (wajib)",
      demandOption: true,
      type: "string"
    },
    no: {
      describe: "Isi nomor kontak anda (wajib)",
      demandOption: true,
      type: "string"
    },
    email: {
      describe: "Isi nama akun email anda",
      demandOption: false,
      type: "string"
    }
  },
  handler(argv) {
    simpanDataContacts(argv.nama, argv.no, argv.email)
  }
}).demandCommand();

yargs.parse();











