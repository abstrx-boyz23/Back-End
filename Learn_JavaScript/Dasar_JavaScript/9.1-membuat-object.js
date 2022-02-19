
// # ============== OBJECT ================ #
// ■□ ======== Membuat Object ======== □■

// Object Literasi
let absen1 = {
  'nama lengkap' : 'Afifudin Nurfalah',
  no : 2,
  kelas : 'XII MIPA 1'
}; // atau

let absen2 = {};
absen2.nama = 'Afifudin Nurfalah';
absen2.no = 2;
absen2['kelas'] = 'XII MIPA 1'; // sama saja

console.log(absen2.nama);


// Function Declaration 
function fungsiSiswa(nama, no, kelas) {
  let absen = {};
  absen.nama = nama;
  absen.no = no;
  absen.kelas = kelas;
  return absen;
};
let absen3 = fungsiSiswa('Ucup',23,'XII IPS 3')
console.log(absen3);

// Constructor
function Absen(nama, no, kelas) {
  this.nama = nama;
  this.no = no;
  this.kelas = kelas;
}
let absen4 = new Absen('plongo', 18,'XII IPA 5')
let absen5 = new Absen('helo', 12,'XII IPS   5')
console.log(absen3);
console.log(absen4);

// ========《PROGRAMMER ZAMAN NOW》=========
  // menghapus atribut atau property
  const halo = {
    nama : 'udin',
    umur : 99
  }
  delete halo.umur;
  console.log(halo);