// affdn-nrflh23 | April, 22 2022

// Create Stream
let fs = require("fs");


// Write Stream
const data = fs.createWriteStream("11.stream.txt");
data.write("Contoh :\n");
data.write("Afif ");
data.write("dan ");
data.write("Rara.");

// Read Stream
const data1 = fs.createReadStream("11.stream.txt");
data1.addListener("data", result => {
	console.log(result.toString());
});



