// Operator Instanceof ==> Untuk mengecek Object dari Class tertentu atau bukan

class OrangTua {
  constructor(nama) {
    this.nama = nama;
  }
}
class Anak extends OrangTua{
}

const dasmad = new OrangTua("Dasmad"); // sbg ayah
const pukis = new Anak("Pukis");       // sbg anak

console.log(typeof dasmad); // object
console.log(typeof pukis);  // object

console.log(dasmad instanceof OrangTua); // true
console.log(dasmad instanceof Anak);     // false
console.log(pukis instanceof OrangTua);  // true, karena merupakan pewarisan class dari OrangTua
console.log(pukis instanceof Anak);      // true


