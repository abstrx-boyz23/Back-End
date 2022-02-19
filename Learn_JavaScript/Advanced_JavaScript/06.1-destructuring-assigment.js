
// ============= WEB_PROGRAMMING_UNPAS ==============
  // ========= Destructuring Assigment ==========

// // Destructuring Array

// const nama = ['afif','udin','rara'];
// // const [a,b,c] = nama;

// // Skip
// const [a, ,c] = nama;
// console.log(`${a} dan ${c}`);

// // Tukar Item
// let x = 5;
// let y = 10;
// console.log(`${x} dan ${y}`);
// [x,y] = [y,x];
// console.log(`${x} dan ${y}`);

// // Return Value Pada Function
// function tes() {
//   return [2,3];
// }
// const [d,e] = [2,3];
// console.log(`${d} dan ${e}`);

// // Rest Parameter
// const siswa = ['afif','eko','jayen'];
// const [utama,...lainnya] = siswa;
// console.log(lainnya);

// // Destructuring Object
// const murid = {
//   nama: 'Afifudin Nurfalah',
//   absen: 2
// };
// const {nama,absen} = murid;
// console.log(`Nama saya ${nama}, dan saya absen no.${absen}`);

// // Assigment Tnpa Deklarasi Object
// ({nama,absen} = { nama: 'Afifudin Nurfalah', absen: 2 });
// console.log(`Nama saya ${nama}, dan saya absen no.${absen}`);

// Ganti Nama Variabel Dari Object
// const murid = {
//   nama: 'Afifudin Nurfalah',
//   absen: 2
// };
// const {nama: namaMurid, absen: absenMurid} = murid;
// console.log(`Nama saya ${namaMurid}, dan saya absen no.${absenMurid}`);

// // Default Value
// const murid = {
//   nama: 'Afifudin Nurfalah',
//   absen: 2,
//   email: 'contoh@gmail.com'
// };
// const {nama: namaMurid, absen: absenMurid, email: emailMurid = 'afifu5881@gmail.com'} = murid;
// console.log(`Nama saya ${namaMurid}, saya absen no.${absenMurid},
// dan email saya adalah ${emailMurid}`);

// // Rest Parameter (Object)
// const siswa = {
//   nama: 'Afifudin Nurfalah',
//   kelas: 'Xii Mipa 1',
//   absen: 2
// }
// const {nama, ...sisanya} = siswa;
// console.log(nama);
// console.log(sisanya);

// Mengambil Satu Property Object Ke Return Function (Amazing)
const siswa = {
  nama: 'Afifudin Nurfalah',
  kelas: 'Xii Mipa 1',
  absen: 2
}
function tes({nama}) {
  return `Nama saya ${nama}`
}
console.log(tes(siswa));


