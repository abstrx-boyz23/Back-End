
// # ============== ARRAY ================ #
// ■□ ======  Manipulasi Array ====== □■

// 1. Menambah Isi Array (manual)
let nama = [];
nama[0] = 'Afif';
nama[1] = 'Udin';
nama[2] = 'Nur';
nama[3] = 'Falah';
console.log(nama);

// 2. Menghapus isi array (manual)
let nama = ['Afif','Udin','Nur','Falah'];
nama[1] = undefined;
console.log(nama);

// 3. Menampilkan isi array (pakai pengulangan)
let nama = ['Afif','Udin','Nur','Falah','Bang Udin'];
for (let i = 0; i < nama.length; i++) {
  console.log('Absen '+ (i+1) +' , Nama : '+ nama[i]);
}















