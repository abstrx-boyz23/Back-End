// ========= PROGRAMMER ZAMAN NOW ==========

// Ternary Operator
const nilai = 80;
const average = nilai >= 75 ? 'Anda Lulus' : 'Anda Tidak Lulus';
console.log(`Nilai anda ${nilai}, Maka ${average}`);

// Nullish Coalescing Operator (Nullish ==> undefined & null)
let parameter = null;
let mengubahNullish = parameter ?? 'Hello World';
console.log(mengubahNullish);

// Optional Chaining
  // error 
  const nama = {};
  console.log(nama?.umur);
  
// Operator OR Pada Truthy & Falsy
console.log('===== OR Pada Truthy & Falsy =====');
console.log('string 1' || 'string 2'); // string isi => true
console.log('' || 'string'); // string kosong => false
console.log(0 || {}); // object => true
console.log(0 || null); // jika false semua, ambil paling akhir
  // contoh penerapan
  const dataDiri = {
    namaLengkap : 0,
    namaPanggilan : 'Afif'
  };
  console.log(dataDiri.namaLengkap || dataDiri.namaPanggilan);

// Operator AND Pada Truthy & Falsy (Kebalikan OR)
console.log('===== AND Pada Truthy & Falsy (Kebalikan OR) =====');
console.log('string 1' && 'string 2'); // jika  true semua, ambil paling akhir
console.log('' && 'string'); // nyari yg false
console.log(0 && {}); // 0
console.log(0 && null); // karna dua duanya false, maka ambil paling awal


