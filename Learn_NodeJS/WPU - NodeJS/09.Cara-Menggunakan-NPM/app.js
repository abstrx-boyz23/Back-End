const validator = require("validator");
const chalk = require("chalk");

console.log();

// Tes validator
console.log(validator.isEmail("afifu5881@gmail.co.id"));
console.log(validator.isMobilePhone("+628881672383763", "id-ID"));
console.log(validator.isNumeric("-628881672383763"));

// Tes chalk
console.log(chalk.blue('Hello') + chalk.bgHex("#757906a4")(' World') + chalk.red(' !'));
console.log(chalk.hex("#ff17db")("Hello Afif !!"));

console.log();










