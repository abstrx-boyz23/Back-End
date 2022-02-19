// ======== PROGRAMMER ZAMAN NOW =========

console.log('=========== Array ==========');
{ // Array
  const nama = ['Afifudin','Nurfalah'];
  // Cara Lama
  // const namaDepan = nama[0];
  // const namaBelakang = nama[1];

  // Destructuring
  const [namaDepan, namaBelakang] = nama;
  
  console.log(namaDepan);
  console.log(namaBelakang);
}
console.log('=========== Object ==========');
{ // Object
  const nama = {
    namaDepan : 'Afifudin',
    namaBelakang : 'Nurfalah',
    alamat : {
      jalan : 'Jalan Buntu',
      kec : 'Kecamantu',
      kota : 'Kota Hantu'
    },
    hobi : 'Experimen',
    temen : 'Rara'
  };
  // Cara Lama
  // const namaDepan = nama.namaDepan;
  // const namaBelakang = nama.namaBelakang;
  
  // Destructuring
  const {namaDepan,namaBelakang,alamat,...lainnya} = nama;
  
  console.log(namaDepan);
  console.log(namaBelakang);
  console.log(alamat);
  console.log(lainnya);
}

console.log('======= Nested Object =======');
{ // Nested Object

  const nama = {
    namaDepan : 'Afifudin',
    namaBelakang : 'Nurfalah',
    alamat : {
      jalan : 'Jalan Buntu',
      kec : 'Kecamantu',
      kota : 'Kota Hantu'
    },
    hobi : 'Experimen',
    temen : 'Rara'
  };
  const {namaDepan,namaBelakang,alamat : {jalan,kec,kota},...lainnya} = nama;
  
  console.log(namaDepan);
  console.log(namaBelakang);
  console.log(jalan);
  console.log(kec);
  console.log(kota);
  console.log(lainnya);
  
}

console.log('====== Destructuring Function Parameter ======');
{ // Destructuring Function Parameter
  function sayHello({namaDepan,namaBelakang}) {
    console.log(`Hai semua, nama depan saya adalah ${namaDepan}`);
    console.log(`Sedangkan nama belakangnya adalah ${namaBelakang}`);
  }
  
  const orang = {
    namaDepan : 'Afifudin',
    namaBelakang : 'Nurfalah'
  };
  const siswa = {
    namaBelakang : 'Udin',
    kelas : 'Xii Mipa 1'
  }
  sayHello(orang);
  sayHello(siswa);
}

console.log('======= Default Value =======');
{ // Default Value
  const siswa = ['Afif','Xii Mipa 1'];
  const [nama, kelas, no = 2] = siswa;
  
  console.log(nama);
  console.log(kelas);
  console.log(no);
}

console.log('===== Mengganti Nama Property =====');
{ // Mengganti Nama Property
  const orang = {
    namaDepan : 'Afifudin',
    namaBelakang : 'Nurfalah'
  };
  const {namaDepan : firstName, namaBelakang : lastName} = orang;
  console.log(firstName);
  console.log(lastName);
}
