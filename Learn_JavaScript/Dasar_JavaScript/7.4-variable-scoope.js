
// # ============== FUNCTION ================ #
//  ■□ ===== Variable Scoop ===== □■

// Ada 2 yaitu, Function Scoope & Block Scoope
// ==== Contoh Function Scoope Ke 1 ====
let a = 6;
if (a % 2 == 0) {
	let genap = true;
}
if (genap == true) {
	console.log('Genap !!');
}
// ==== Contoh Function Scoope Ke 2 ====

// 《Global Scoope / Window Scoope》
let tiga = 3;
// 《Local Scoope》
function contoh() {
	let dua = 2;
	console.log(dua);
}
contoh()

// Kesimpulan : Analogi diatas contohnya seperti mobil yg mempunyai kaca film yg sangat gelap

// ==== Contoh Function Scoope Ke 3 ====
let a = 1;
function coba() {
  a = 3;
}
console.log(a);
// analoginya sama seperti kaca film mobil yg sangat gelap

// ==== Contoh Function Scoope Ke 4 ====
let a = 1;
function tes() {
  let a = 3;
  console.log(window.a);// karna window
}
tes()

// ==== Contoh Function Scoope Ke 5 ====
let a = 2; //global scoope
function lima(a) { // function scoope
  console.log(a);
}
lima(4) 

// ==== Contoh Function Scoope Ke 6 ====
let a = 2; // global 
function lima(a) { // local
  console.log(a);
}
lima(a) // global
console.log(a); // global









