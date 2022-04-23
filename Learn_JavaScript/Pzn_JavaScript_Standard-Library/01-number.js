// affdn-nrflh23 | April, 13 2022

// Konversi Number
const id = Number("1334");
console.log(id);

// Number Static Properties
console.log(Number.MIN_VALUE); // => mendapat number minimal
console.log(Number.MAX_VALUE); // => mendapat number maksimal

// Number Static Method
const a = 12;
console.log(Number.isInteger(a)); // => mengecek apakah variable berisi value integer
console.log(Number.isNaN(a)); // => mengecek apakah variable berisi value NaN

// Number Instance Method
let b = Number("718");

console.log(b.toString(2)); // num.toString(radix) => mengubah number menjadi string sesuai radix
console.log(b.toLocaleString("id-ID")); // => mengubah number menjadi string sesuai locale
