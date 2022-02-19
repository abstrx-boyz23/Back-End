
// # ============ TIPE DATA ============= #
//  ■□ ======= Number ======= □■

let angka = 9999999999999999;// 16 digit
console.log("angka = 9999999999999999 dibulatkan menjadi : "+angka);
// (15 digit keatas akan dibulatkan) 

// === Angka Tanpa Desimal ===
let tahunSekarang = 2021,
		tahunKemerdekaan = 1945,
		umurIndo = tahunSekarang - tahunKemerdekaan;
console.log('Umur Kemerdekaan : '+ tahunSekarang + ' - ' + tahunKemerdekaan + ' = ' + umurIndo);

// === Angka Desimal ===
let desimal1 = 3.14,
		desimal2 = 12.3000;
console.log(desimal1+' & '+desimal2);
// (Hati2 dlm perhitungan angka desimal karena tdk akurat)

// === Eksponen ===
let a = 123e3,
		b = 123e-3;
console.log('nilai 123e3 : '+a+'   , nilai 123e-3 : '+b);

// === Bilangan Negatif ===
let a = -a;
console.log('nilai a : '+ a);

/* ======《PROGRAMMER ZAMAN NOW》======
   1. Binary (basis 2) */
console.log('Binary : ' + 0b01);
// 2. Octal (basis 8)
console.log('Octal : ' + 0o01234567);
// 3. Hexadesimal (basis 16)
console.log('Hexadesimal : ' + 0x0123456789abcdef);