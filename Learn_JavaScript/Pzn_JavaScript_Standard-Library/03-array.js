// affdn-nrflh23 | April, 13 2022

// Array Loop
const friends = ["Afif", "Eko", "Jayen", "Risky"];
friends.forEach((one, i) => console.log(`${i+1}. ${one}...`));

// Array Search
const source = [2,4,"eko",5,"afif",3,"afif",1,];
console.log(source.find(val => val < 4));             // => mencari data sesuai dengan kondisi
console.log(source.findIndex(val => val == "afif"));  // => mencari data index sesuai dengan kondisi
console.log(source.includes(5));                      // => mengecek apakah ada data yg dicari
console.log(source.indexOf(1));       								// => mengecek posisi index data
console.log(source.lastIndexOf("afif"));							// => mengecek posisi index data

// Array Filter
const num = source.filter(val => typeof val === "number"); // memfilter hanya number
console.log(num.sort((a,b) => a - b)); // mengurutkan number

// Array Transfrom
const name = "Afifudin Nurfalah".split(" ");
console.log(name.map(indx => indx.toUpperCase())); // melakukan transform tiap value dan menghasilkan array result

console.log(num.reduce((result,val) => result - val)); // melakukan transform dengan menggunakan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya
console.log(num.reduceRight((result,val) => result - val)); // sama seperti reduce(), namun dilakukan dari belakang



