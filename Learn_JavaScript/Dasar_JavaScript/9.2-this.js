
// # ============== OBJECT ================ #
// ■□ ======== Apa itu this ? ======== □■

// // 《Apa itu this ?》
// console.log(this === window);
// console.log(window);
// console.log(this);

// // 《Membuat Object》

// // cara 1 - object literasi
// const barang = {
//   nama1 : 'tas',
//   nama : function (nama) {
//     console.log(this);
//   },
// };
// barang.nama('sepatu')

// // // cara 2 - function declaration
// function namaBarang() {
//   console.log('sepatu');
//   console.log(this);
// }
// this.namaBarang();



// // cara 3 - construction
// function NamaBarang(a) {
//   console.log('nama '+ a);
//   console.log(this);
// }
// let barang1 = new NamaBarang('sepatu');
// let barang2 = new NamaBarang('tas');