
// ============= WEB_PROGRAMMING_UNPAS ==============
  // ========= HOF Pada Filter, Map, dan Reduce ==========
  
const angka = [7,3,-4,9,-8,6,1,0,-9,-5];
// // For Biasa
// const newAngka = [];

// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 0) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// // Filter
// const newAngka = angka.filter(a => a >= 0);
// newAngka.sort((b,a) => b-a)
// console.log(newAngka.join(') ('));

// // Map 
// const newAngka = angka.map(a => a*2);
// console.table(angka);
// console.table(newAngka);

// // Reduce (Menggabungkan / Merakit Seluruh Elemen Menjadi Satu)
// const newAngka = angka.reduce((accumulator, currentValue) => 
// accumulator + currentValue, 20 /* nilai awal */);
// // console.log(20 + 7 + 3 + (-4) + 9 + (-8) + 6 + 1 + 0 + (-9) + (-5));
// console.log(newAngka);

// Method Chaining
/* rules :
1. angka > 1
2. mengurutkan 0 - 9
3. angka * 3
4. angka - 10
5. angka > 7
*/

const newAngka = angka.filter(a => a > 1) // hasil 7, 3, 9, 6
      .sort((a,b) => a - b)   // 3, 6, 7, 9
      .map(a => a * 3)        // 9, 18, 21, 27
      .map(a => a - 10)       // -1, 8, 11, 17
      .filter(a => a > 7);   // 8, 11, 17
console.log(newAngka);


