
// ============= WEB_PROGRAMMING_UNPAS ==============
  // ========= Destructuring Function ==========

// // Destructuring Function Return Value (Array)  
// function kalkulasiArray(a,b) {
//   return [a + b, a - b, a * b];
// }

// const [jumlah, kurang, kali, bagi = 'tidak ada'] = kalkulasiArray(6,2);
// console.log(`jumlah = ${tambah} | kurang = ${kurang} | kali = ${kali} | bagi = ${bagi}`);

// // Destructuring Function Return Value (Object)
// function kalkulasiObject(a,b) {
//   return {
//     tambah : a + b,
//     kurang : a - b,
//     kali : a * b,
//     bagi : a / b
//   };
// }
// const {kali,bagi,kurang,tambah} = kalkulasiObject(6,2);
// console.log(`jumlah = ${tambah} | kurang = ${kurang} | kali = ${kali} | bagi = ${bagi}`);

// // Destructuring Function Arguments
// const siswa = {
//   nama : 'Afifudin Nurfalah',
//   absen : 2
// }

// function perkenalan(object) {
//   console.log(`Halo nama saya ${object.nama} dan absen no.${object.absen}`);
// }
// perkenalan(siswa);

// pakai Destructuring (berguna saat komplek)
const siswa = {
  nama : 'Afifudin Nurfalah',
  absen : 2,
  mapel : {
    mapel1 : 'Biologi',
    mapel2 : 'Matematika',
    mapel3 : 'B.Indonesia'
  }
}

function perkenalan({nama, absen, mapel: {mapel1, mapel2, mapel3}}) {
  console.log(`Halo nama saya ${nama} dan absen no.${absen},
  mapel sekolah = ${mapel1}, ${mapel2}, ${mapel3}`);
}
perkenalan(siswa);


