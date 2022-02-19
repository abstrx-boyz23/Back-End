
// ========= PROGRAMMER ZAMAN NOW ==========

// Break (Menghentikan Pengulangan atau Pengkondisian Secara Paksa)
let nama = 'Rara Sayangku';
let a = 0;
while(true) {
  console.log(nama);
a++;
  if (a === 3) {
    break;
  }
}

// Continue (Menskip Perintah Tapi Tetap Melanjutkan Eksekusi)
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Ini Genap');
}
