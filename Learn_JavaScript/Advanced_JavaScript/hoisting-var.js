
// ==== HOISTING UNTUK VAR =====

console.log('====== Variabel =======');
name = 'udin';
console.log(name);
var name; // 'udin'

console.log('====== Function =======');
console.log(sayHello('udin')); // 'Hello udin'

function sayHello(name) {
  return `Hello ${name}`
}

console.log(`====== Aritmatika =======`);
var angka = 3;
console.log(`Maka Total Sekarang = ${angka += 7}`); // 10
var angka;

console.log('===== Inisialisasi ====='); // tdk berlaku
var a = 2;
console.log(`${a} dan ${b}`); // '2 dan undefined'
var b = 4;