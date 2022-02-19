
// # ============== ARRAY ================ #
// ■□ ====== Method Pada Array===== □■
//let nama = ['Afif','Udin','Nur','Falah']
// // 1. length
// console.log(nama.length);

// // 2. join()
// console.log(nama.join(' - '));

// // 3. push() & pop() | paling belakang
// nama.push('Apip','SiUdin');
// console.log(nama.join(' • '));
// nama.pop()
// console.log(nama.join(' • '));

// // 4. unshift() & shift() | paling depan
// nama.unshift('Hello')
// console.log(nama.join(' • '));

// nama.shift()
// nama.shift()
// console.log(nama.join(' • '));

// // 5. splice()
// // rumus = splice(nilaAwal, mauDihapusBerapa, valueBaru)
// nama.splice(1,0,'Udin','Nur')
// console.log(nama.join(' - '));
// // atau
// nama.splice(0,2)
// nama.splice(1,0,'Hello','World')
// console.log(nama.join(' - '));

// // 6. Slice()
// // harus membuat variable baru sehingga variable aslinya masih utuh
// // rumus : let baru = nama.slice(awal, (akhir dikurangi 1))
// let nama2 = nama.slice(0,2);
// console.log(nama.join(' - '));
// console.log(nama2.join(''));

// // 7. forEach() (mirip for loop)
// let cetak = nama.forEach(function(e ,i ,v) {
//   console.log('no. '+ (i+1) +' , nama : '+ e + ' , hello ' + v.join(' - '));
// })// e = element , i = index , v = value

// // 8. map() / lebih baik bikin let baru
// let nama3 = nama.map(function(a) {
//   return a;
// }) // map itu mengembalikan nilai array
// console.log(nama3.join(' • '));

let angka = ['zaxu',9,1,26,4,3,5,7,'adin'];
// // 9. sort() / mengurutkan
// console.log(angka.join(' - '));
// angka.sort()// mngurutkan huruf
// angka.sort(function(a,b){// mengurutkan angka
//   return a-b;
// });
// console.log(angka.join(' - '));

// 10. filter (banyak angka)
let angkaFilter = angka.filter(function(a) {
  return a >= 5;
});
console.log(angkaFilter.join(' - '));

// // 11. find (hanya bisa satu angka)
// let angkaFind = angka.find(function(a) {
//   return a > 5;
// });
// console.log(angkaFind);

// <== JavaScript Dasar - PZN ==>
// 12. .split("") = untuk memisahkan text dan merubah jadi array (khusus string)
let text = "Hello World";
console.log(text.split(""));


