
// # ===== PENGULANGAN + PENGKONDISIAN ====== #
//  ■□ ======== Bersarang ======== □■

// membuat kata berjejer kekanan
for (let i = 0, rara = 'Rara '; i < 5; i++) {
	rara = rara + 'cantik ';
}
console.log(rara);

// membuat kata berjejer kebawah
for (let i = 0, rara = 'Rara '; i < 5; i++) {
	rara = rara + 'cantik ';
	rara = rara + "\n";
}
console.log(rara);

// # membuat bintang 10 baris tiap baris 5 bintang
for (let a = 1, bintang = ''; a <= 10; a++) {
	for (let b = 1; b <= 5; b++) {
		bintang += '*';
	}
	bintang += '\n';
}
console.log(bintang);

// membuat segitiga siku-siku dari bintang 
for (let i = 1, bintang = ''; i <= 10; i++) {
	for (let u = 1; u <= i; u++) {
		bintang = bintang + '*'
	}
	bintang = bintang + '\n'
}
console.log(bintang);

// membuat segitiga siku-siku dr bintang (terbalik)
for (let a = 10, bintang =''; a >= 1 ; a -= 1) {
	for (let b = 1; b <= a; b+= 1) {
		bintang += '*'
	}
	bintang += '\n'
}
console.log(bintang);

// membuat catur dari tanda kotak (■)
for (let a = 1, kotak = '\n'; a <= 10; a++) {
	if (a % 2 == 0) {
		for (let b = 1; b <= 100; b++) {
			kotak += '    ■'
		}
		kotak += '\n'
	}
	else {
		for (let c = 1; c <= 100; c++) {
			kotak += '■    '
		}
		kotak += '\n'
	}
}
console.log(kotak);






































