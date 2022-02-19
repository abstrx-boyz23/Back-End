
// # ============ TIPE DATA ============= #
// ■□ ========== String ========== □■

// === Concatenate ===
console.log('Hello ' + 'World !'); // normal

// === Backslash ===
let hari = '\u00a9 Ini adalah Hari Jum\'at';   // tanda '\' digunakan saat bertemu tanda petik
console.log(hari);
hari = 'Ini adalah \n Hari Jum\'at';
console.log(hari);

// === Membandingkan String ===
let bandingkan = 'AFIF' === 'afif';
console.log(' AFIF === afif :  '+ bandingkan); // huruf besar kecil dianggap berbeda meski tulisannya sama

// === .length (method) ===
let inisial = 'abstrx-boyz23';
console.log('\'abstrx-boyz23\' berapa huruf = '+ inisial.length);

// ========《PROGRAMMER ZAMAN NOW》=========

console.log('helo\\world');
console.warn('Ini Warning !!');
console.error('Ini Error !!');

// === String Template (menggunakan backtick (``)) ===

const namaAwal = 'Afifudin';
const namaTengah = 'Nur';
const namaAkhir = 'Falah';
console.log(`Helo, ${namaAwal} ${namaTengah} ${namaAkhir}`); // string modern
console.log(`2 + 3 = ${2+3}`); // aritmatika
console.log(`5 <= 10 = ${5<=10}`); // perbandingan

// (sebagai multiline)
let dataDiri = `Nama = Afifudin Nurfalah
Kelas = XII MIPA 1
No. Absen = 02
SMA Negeri 5 Tegal`
console.log(dataDiri);