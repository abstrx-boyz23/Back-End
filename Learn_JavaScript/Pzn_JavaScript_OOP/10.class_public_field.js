// <== Class Field ==>

// Class : Public Field

class IPA1 {
  
  // public field
  namaDepan;
  namaBelakang;
  absen;
  
  constructor(namaDepan, namaBelakang,absen) {
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;
    this.absen = absen;
  }
  
  sayHello(nama) {
    console.log(`Hello ${nama}`);
  }
}
const afif = new IPA1("Afifudin","Nurfalah",2);
console.log(afif);

const eko = new IPA1('Eka','Leo',11);
console.log(eko);






