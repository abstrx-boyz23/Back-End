
// ========= PROGRAMMER ZAMAN NOW ==========

// // normal
// function jayen() {
//   return ('hello jayen');
// }
// console.log(jayen());

// // pada function + pengkondisian
// function nilai(angka) {
//   if (90 < angka && angka <= 100) {
//     return ('A')
//   } else if (80 < angka && angka <= 90) {
//     return ('B')
//   } else if (70 < angka && angka <= 80) {
//     return ('C')
//   } else {
//     return ('D')
//   }
// }
// console.log(nilai(90));

// // Pada Function + For of
// let angka = [10,21,3,4,2,7];

// function mencariElement(namaAray, elementYgDicari) {
//   for (let element of namaAray) {
//     console.log(element);
//     if (element === elementYgDicari) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(mencariElement(angka,21));

// function mencariElement2(namaAray,elementYgDicari) {
//   for (var i = 0; i < namaAray.length; i++) {
//     console.log(namaAray[i]);
//     if (namaAray[i] === elementYgDicari) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(mencariElement2(angka,21));

// Mencari Property Object Dengan For Of
const siswa = {
  nama : 'udin',
  umur : 16
}
function mencariProperty(namaObject, namaProperty) {
  for (let property in namaObject) {
    if (namaObject[property] === namaProperty) {
      return true;
    }
  }
  return false;
}
console.log(mencariProperty(siswa,siswa.nama));