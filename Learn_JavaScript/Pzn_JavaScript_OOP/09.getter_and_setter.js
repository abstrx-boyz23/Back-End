// GETTER AND SETTER

// Getter Code 
const absen2 = {
  namaDepan: "Afifudin",
  namaBelakang: "Nurfalah",
  // namaLengkap: function () {
  //   return `${this.namaDepan} ${this.namaBelakang}`
  // }
  
  // get berfungsi merubah method object menjadi property object dan tidak boleh menggunakan parameter
  get namaLengkap() {
    return `${this.namaDepan} ${this.namaBelakang}`;
  },
  
  // kalo mau merubah nilai getter harus pakai setter
  set namaLengkap(nilai) {
    let nama = nilai.split(" ");
    this.namaDepan = nama[0];
    this.namaBelakang = nama [1];
  }
}

absen2.namaLengkap = "Nur Ratriningsih"; 

console.log(absen2.namaLengkap);
console.log(absen2);

// Class : Getter And Setter (Sama Persis)
class Siswa {
  constructor(namaDepan,namaBelakang){
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;
  }
  get namaLengkap(){
    return `${this.namaDepan} ${this.namaBelakang}`;
  }
  set namaLengkap(value){
    let nama = value.split(" ");
    this.namaDepan = nama[0];
    this.namaBelakang = nama[1];
  }
}

const afif = new Siswa('Afifudin',"Nurfalah");
console.log(afif);
console.log(afif.namaLengkap);

afif.namaLengkap = "Afifudin NurRatriningsih";
console.log(afif);
console.log(afif.namaLengkap);




