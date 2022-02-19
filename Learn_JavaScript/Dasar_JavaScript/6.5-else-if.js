
// # ============ Pengkondisian ============= #
//  ■□ ======== ELSE-IF (ELIF) ======== □■

// Mencari Bilangan Ganjil-Genap
cobaLagi = true;
while(cobaLagi === True) {
	
	let angka = prompt('Masukan Angka :');
	if (angka % 2 === 0) {
		alert(angka +' ini termasuk bilangan genap');
	} else if (angka % 2 === 1) {
		alert(angka +' ini termasuk bilangan ganjil');
	} else {
		alert('Maaf yang anda masukan bukan angka !!');
	}
	cobaLagi = confirm('Mau Nyoba Lagi ??')
}
alert('Terimakasih..')