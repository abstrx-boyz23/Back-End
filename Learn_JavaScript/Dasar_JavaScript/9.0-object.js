
// # ============== OBJECT ================ #
// ■□ ===== Cara Membuat dan Memanggilnya===== □■

let absen2 = { 
  nama : 'Afifudin Nurfalah',
  ttl : 'Tegal, 14 Desember 2004',
  nisn : 5859,
  smpAsal : 'SMPN 3 TEGAL',
  alamat : { // membuat object didalam object
    jalan : 'Tk. Pertiwi No.40A',
    RtRw : 'Rt. 04 / Rw. 02',
    kel : 'Kel. Kemandungan',
    kec : 'Kec. Tegal Barat',
    kota : 'Kota Tegal'
  }
};

// =========《PROGRAMMER ZAMAN NOW》==========
  // 《menghapus property / method》
  delete absen2.nisn
  console.log(absen2);
  
  // 《With-Statement》
  let siswa = {
    nama : 'udin',
    umur : 16,
    kelas : 'XII MIPA 1'
  }
  with (siswa) {
    console.log(nama);
    console.log(umur);
    console.log(kelas);
  }
  
// === Getter And Setter ===
  // Getter
  let orang = {
    namaDepan : 'Afifudin',
    namaBelakang : 'Nurfalah',
    // namaLengkap : function() {
    //   return `${this.namaDepan} ${this.namaBelakang}`;
    // }
    get namaLengkap() {
      return `${this.namaDepan} ${this.namaBelakang}`;
    }
  };
  console.log(orang.namaLengkap);
  
  
  // Setter
  orang = {
    namaDepan : 'Afifudin',
    namaBelakang : 'Nurfalah',
    get namaLengkap() {
      return `${this.namaDepan} ${this.namaBelakang}`;
    },
    set namaLengkap(nilai) {
      const nama = nilai.split(' ');
      this.namaDepan = nama[0];
      this.namaBelakang = nama [1];
    }
  };
  orang.namaLengkap = 'Udin Bahlul'
  console.log(orang.namaLengkap);
