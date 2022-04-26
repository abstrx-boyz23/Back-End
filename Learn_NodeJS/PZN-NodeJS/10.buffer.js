// affdn-nrflh23 | April, 22 2022

// Create Buffer
const buffer = Buffer.from("Afifudin");
console.log(`Buffer :`, buffer);
console.log(`Buffer utf-8 :`, buffer.toString());

buffer.reverse();
console.log(`Buffer utf-8 reverse :`, buffer.toString());

// Buffer Encoding 
console.log(`\n      Encoding Buffer`);

const buffer1 = Buffer.from("Nurfalah");
console.log(buffer1.toString("utf8"));
console.log(buffer1.toString("hex"));
console.log(buffer1.toString("base64url"));

const buffer2 = Buffer.from("TnVyZmFsYWg=","base64url");
console.log(buffer2.toString("utf8"));



