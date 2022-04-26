// affdn-nrflh23 | April, 21 2022

/* 
// Kalau extension file nya .js, harus buat async function running();

function samplePromise() {
	return Promise.resolve("Berhasil !");
}

async function running() {
	const a = await samplePromise();
	console.log(a);
}
running();
*/

// Kalau extension file .mjs, bisa lngsng dijalankan tnpa masalah
function samplePromise() {
	return Promise.resolve("Berhasil !");
}
const a = await samplePromise();
console.log(a);

