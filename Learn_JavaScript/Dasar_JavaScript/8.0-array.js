
// # ============== ARRAY ================ #
// ■□ ==== Introduction of Array ==== □■

// Array adalah sebuah variable yang lebih sakti karena mampu menyimpan nilai lebih dari satu

// 《cara menulis》
let mapel = ['Fisika','Kimia','Biologi','Matematika']; // contoh array

// atau
let binatang = [];
binatang = ['ayam','sapi','kambing','bebek','ikan']; // index = [0, 1, 2, 3, 4, dll]
console.log(binatang[3]);// menampilkan array

// 《berbeda tipe data》
let anekaRagam = [true, 10, 'hello'];
console.log(anekaRagam[1]);

// 《array memliki tipe data object》
console.log(typeof(anekaRagam));

// 《membuat array bersarang》
let contoh = ['teks',2,true,[9,[8,5],7]];
console.log(contoh[3][1][1]);

// 《memanggil array dari variable lain》
let hello = [1,2,3,contoh[1]];
console.log(hello[3]);

// 《undefined array value》
let nama = ['apip','udin'];
console.log(`halo ${nama[2]}`);