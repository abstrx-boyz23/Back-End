
//  ========= PROGRAMMER ZAMAN NOW ==========

// Arrow function
const say = (name) => {
  return (`Hello ${name}`);
};
console.log(say('Afif'));

// Arrow Fnction Lebih Sederhana (Jika tnpa block, maka return tdk perlu ditulis)
const hello = (name1) => (`Hello ${name1}`);
console.log(hello('Afif'));
  // contoh lain
  const tambah = (nilai1, nilai2, nilai3) => nilai1 + nilai2 + nilai3;
  console.log(tambah(2,6,2));
  
// Jika Parameter Hanya Satu, Bisa Tnpa Menggunakan Tnda Kurung
const hai = nama => console.log(`Hai ${nama}`);
hai('Rara')

// Arrow Function Sebagai Parameter 
const nama = callback => callback('Afif');
nama(hai)
