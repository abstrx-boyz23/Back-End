
// ============ WEB_PROGRAMMING_UNPAS ============
  // ============ Closure ============

// // == Lexical Scoping ==
// function global() {
//   let nama = 'afifudin';
//   function local() {
//     console.log(nama);
//   }
//   console.dir(local);
// }
// global();

// // == Closure ==
// function global1() {
//   return function (nama) {
//     console.log(nama);
//   }
// }
// let panggilNama = global1();
// panggilNama('afifudin1')

// // == Function Factory ==
// function beliBuah(namaPembeli) {
//   return function(namaBuah) {
//     console.log(`Halo ${namaPembeli}, kamu membeli ${namaBuah}`);
//   }
// }
// const ucapAfif = beliBuah('Afif');
// const ucapEko = beliBuah('Eko');
// const ucapJayen = beliBuah('Jayen');

// // ucapAfif('pisang');
// // ucapEko('jeruk');
// console.dir(ucapJayen('mangga'));

// // ===== Privte Variable =====
// // let total = 0;
const increment1 = () => {
  let total = 0;
  return function() {
    return ++total;
  }
};
const inc = increment1();
let total1 = 10;

console.log(inc());
console.log(inc());
console.log(inc());

// Atau Cara Lebih Simpel
const increment = (() => {
  let total = 0;
  return function() {
    return ++total;
  }
})();
let total = 10;

console.log(increment());
console.log(increment());
console.log(increment());

