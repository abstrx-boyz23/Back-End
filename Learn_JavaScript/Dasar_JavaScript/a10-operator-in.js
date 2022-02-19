
// console.log();
// =========《PROGRAMMER ZAMAN NOW》==========
// Operator In Pada JavaScript

// In
let data = {
  nama : 'afif',
  umur : 17,
  baru : undefined
};
data.tahunLahir = 1990;
console.log(data);
console.log(`apakah didalam object 'data' \nada property 'nama' = ${'nama' in data} `);

// mengecek property
if ('baru' in data && data.baru !== undefined && data.baru !== null) {
  console.log(`ada object yg namanya 'baru'`);
} else {
  console.log('maaf tidak ada');
}
// mengecek value pada array
const nama = [null,'udin',undefined];

for (var i = 0; i < nama.length; i++) {
  if (i in nama && nama[i] !== undefined && nama[i] !== null) {
    console.log(nama[i]);
  } else {
    console.log('salah');
  }
}

