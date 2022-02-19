
// ============ WEB_PROGRAMMING_UNPAS ============
  // ========== { Arrow Function } ==========

// <<< Function Expression >>>
const sayHello = function (nama) {
  return `Hai ${nama} !!`;
}
console.log(sayHello('Rara'));


// // <<< Arrow function >>>
const sayHello1 = (nama,sifat) => {
  return `Hai ${nama}, kamu sangat ${sifat}`
}
console.log(sayHello1('Rara','cantik'));

// Jika Hanya Satu Parameter, Tak Perlu Pakai Kurung
const sayHello2 = nama => { return `Halo ${nama}`}
console.log(sayHello2('Afif'));

// Implisit Return (otomatus diberi return)
/* Note : Jika Hanya Satu Perintah Dan Isinya 
       Hanya Return, Maka Return Dan 
       Kurung Kurawal Tidak Perlu Ditulis */

let sayHello3 = nama => `Hello ${nama}`
console.log(sayHello3('Udin'));

// Jika Tanpa Parameter, Tetap Diberi Kurung (tnpa di isi)
let helloWorld = () => `Hello World`
console.log(helloWorld());

// Nembuat Arrow Function Dengan Method Map (pengulangan pd array)
  // // biasa
  // let siswa = ['Afifudin', 'Rara', 'Eka Leo'];
  // let jumlahKarakter = siswa.map(function (contoh) {
  //   return contoh.length;
  // })
  // console.log(jumlahKarakter);
  
  // // pakai arrow function
  let siswa = ['Afifudin', 'Rara'];
  let jumlahKarakter = siswa.map(namaVar => namaVar.length);
  console.log(jumlahKarakter);
  
  // atau jika ingin me-return dalam bentuk Object
  let jumlahKarakter1 = siswa.map (namaVar => ({namaVar : namaVar, jumlahKarakter : namaVar.length}))
  // console.table(jumlahKarakter1);