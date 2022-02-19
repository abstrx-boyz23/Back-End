
// # ============== FUNCTION ================ #
//  ■□ ===== Parameter & Argument ===== □■

// jika parameter lbh sedikit dari argument, maka sisa argument di abaikan
function pengurangan(a,b) {
	return a - b;
}
console.log(pengurangan(4,2,5,3));

// jika parameter lbh banyak dari argument, maka sisa parameter jd undefined (hasilnya NaN)
function penjumlahan(a,b,c) {
	return a + b + c;
}
console.log(penjumlahan(2,3));

// parameter kosong, maka argument bisa disimpan di arguments
function kosong() {
	return arguments;
}
console.log(kosong(2,3,4,'hello',true));

// gabungan arguments dengan for loop 
function contohArguments() {
	for (let i = 0,hasil = 0; i < arguments.length; i++) {
		hasil +=  arguments[i];
	}
	return hasil
}
console.log(contohArguments(2,2,2,3,4));