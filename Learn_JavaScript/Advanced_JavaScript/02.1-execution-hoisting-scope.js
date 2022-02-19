
// ============ WEB_PROGRAMMING_UNPAS ============
  // ========= Execution-Hoisting-Scope ==========

// // Execution Context
// var a = 2;
// function kaliSepuluh(angka) {
//   return angka * 10;
// }
// var b = kaliSepuluh(a);
// console.log(b);

//   /* ==== Creation Phase (dibalik layar) ====
  
//   var username = undefined;
//   function linkURL(undefined) {
//     return `htttp://instagram.com/${usernameAccount}`;
//   }
//   */
  
//   // ==== Execution Phase ====
//   var username = '@abstrx-boyz23'
//   function linkURL(usernameAccount) {
//     return `htttp://instagram.com/${usernameAccount}`;
//   }
//   console.log(linkURL('@afifu83'));

// // Hoisting
// console.log(perkenalan());

// var nama = 'Afif';
// var umur = 16

// function perkenalan(nama,umur) {
//   return `Halo semuanya, perkenalkan nama saya ${nama}, dan umur saya ${umur} tahun`
// }


// // Scope
// function A() {
//   console.log('Ini function A');
  
//   function B() {
//     console.log('Ini function B');
    
//     function C() {
//       console.log('Ini function C');
      
//       function D() {
//         console.log('Ini function D');
        
//         function E() {
//           console.log('Ini function E');
//         }
//         E();
        
//       }
//       D();
      
//     }
//     C();
    
//   }
//   B();
  
// }
// A();

// // Scope ke 2
// var name = 'Udin';
// function sayHello() {
//   console.log(arguments);
//   return `Hello ${name}`;
// }
// console.log(sayHello('Gareng','Petruk','Semar','Bagong'));

// Coba Tebak Output-Nya Tapi Jangan Di Run Dulu
console.log('===== Tes Pemahaman =====');

function satu() {
  var nama = 'apip';
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = 'udin';
satu();
dua('falah');
console.log(nama);


