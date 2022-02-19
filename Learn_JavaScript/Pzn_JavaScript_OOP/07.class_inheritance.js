// Class Inheritance (Pewarisan)

// Extends
class Karyawan {
  constructor(nama,umur,pekerjaan) {
    this.nama = nama;
    this.umur = umur;
    this.pekerjaan = pekerjaan;
  }
  sayHello (nama){
    console.log(`Halo ${nama}, Nama Saya Karyawan ${this.nama}`);
  }
}
class Manager extends Karyawan {
  // Karena Extends Jadi Otomatis, Constructor punya parent diwariskan
  // harus diberi kata super agar object instance milik parent bisa diwariskan ke child nya
  
  constructor (nama,umur,pekerjaan){
    super(nama,umur,pekerjaan); 
    
    /* tidak perlu di tulis karna object sudah diwariskan melalui keyword super
     this.nama = nama;
     this.age = age;
     */
  }
  sayHello1 (nama){
    console.log(`Halo ${nama}, Nama Saya Manager ${this.nama}`);
  }
}
const karyawan = new Karyawan('Udin',17,"Programmer");
const manager = new Manager('Eko',17,"Pebisnis");

karyawan.sayHello('Eko');
manager.sayHello('Udin');

console.log(karyawan);
console.log(manager);









