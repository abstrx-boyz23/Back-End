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
console.log(chalk.bold.italic`{cyan Hello} {bgBlue.white World} !!`);

for(let i = 1; i <= 5; i++){
  if(i % 2 === 0){
    console.log(chalk.hex("#F3FF00")`Hello ${i}`);
  } else {
    console.log(chalk.hex("#79F6FF")`Hello ${i}`);
  }
}

console.log();










