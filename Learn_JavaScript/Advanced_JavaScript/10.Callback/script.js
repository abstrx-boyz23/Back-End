 
// =================== WEB_PROGRAMMING_UNPAS =====================
    // ========= Callback (Asynchronous JavaScript) ==========

// // Synchronous Callback
// const test = name => console.log(`Helo, ${name}`);

// const showName = callback => {
//   const name = prompt('Input Your Name : ');
//   callback(name)
// }
// showName(test);

// // Atau
// const showName1 = callback => {
//   const name = prompt('Input Your Name : ');
//   callback(name)
// }
// showName1(name => console.log(`Helo, ${name}`));



// // Contoh Studi Kasus
// const mipa1 = [
//   {
//     "nama": "Afif", 
//     "absen": 2, 
//     "asalSekolah": "SMPN 3 TEGAL"
//   },
//   {
//     "nama": "Eko",
//     "absen": 13,
//     "asalSekolah": "SMPN 1 TEGAL"
//   },
//   {
//     "nama": "Jayen",
//     "absen": 15,
//     "asalSekolah": "SMPN 17 TEGAL"
//   }
// ];

// console.log('Mulai');
// mipa1.forEach(a => {
//   console.log(a.nama);
// })
// console.log('Selesai');



// // Asynchronous Callback (AJAX)
//   // Vanila JavaScript 
 
// function getDataMipa1(url,sukses,eror) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         sukses(xhr.response);
//       } else if (xhr.status === 404) {
//         eror()
//       }
//     }
//   }
//   xhr.onerror = () => console.log("Aduhh Error!");
//   xhr.open("GET",url,true);
//   xhr.send();
// }

// console.log("Mulai");

// getDataMipa1("data/mipa1.json", kelas => {
//   const mp1 = JSON.parse(kelas);
//   mp1.forEach(a => console.log(a.nama))
// }, kelas => console.log("Error"));

// console.log("Selesai");



// Membuat Ajax Di Petani Kode
function getDataMipa1(url,sukses) {
  let xhr = new XMLHttpRequest();
  let err = new Error(); 
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      sukses(xhr.response);
    }
  }
  xhr.onerror = () => console.log("Aduhh Error!");
  xhr.open("GET",url,true);
  xhr.send();
}

console.log("Mulai");

getDataMipa1("data/mipa1.json", kelas => {
  const mp1 = JSON.parse(kelas);
  mp1.forEach(a => console.log(a.nama));
  // console.log(kelas);
});

console.log("Selesai");



//   // JQuery (Ajax)
// console.log('Mulai');

// $.ajax({
//   url: "data/mipa1.json",
//   success: (kelas) => {
//     console.log(kelas);
//   },
//   error: (err) => {
//     console.log(err.responseText);
//   }
// });

// console.log('Selesai');




