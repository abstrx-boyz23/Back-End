
// ============= WEB_PROGRAMMING_UNPAS ==============
  // ========= This-Pada-Arrow-Function ==========

// // Function Constructor (Function Expression)
// const Siswa = function (nama,absen) {
//   this.nama = nama;
//   this.absen = absen;
  
//   this.sayHello = function () {
//     return `Halo semuanya, perkenalkan nama saya ${this.nama}, absen saya nomor ${this.absen}`;
//   }
// }

// const afif = new Siswa('Afif',2);


// Function Constructor (Arrow Function)
// const Siswa = (nama,absen) => { ini error karena arrow function tidak bisa dgn this
const Siswa = function (nama,absen) {
  this.nama = nama;
  this.absen = absen;
  this.sayHello = () => { // untuk method bisa menggunakan thus pada arrow, tetapi disarankan pakai function expression
    return `Halo semuanya, perkenalkan nama saya ${this.nama}, absen saya nomor ${this.absen}`;
  }
}

const afif = new Siswa('Afif',2);

// Arrow Function Pada Object Literal
var nama = 'Bahlul'; // kalau pakai let tetep tdk
const people = {
  nama : 'Udin',
  umur : 23,
  sayHello : () => { // maka hasil undefined
    console.log(this.nama);
    //return `Halo semuanya, perkenalkan nama saya ${this.nama}, umur saya ${this.umur} tahun`;
  }
}