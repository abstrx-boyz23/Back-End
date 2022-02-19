  // Static Field dan Static Method

// Static Field ==> mengubah field myang sebelumnya milik instance object menjadi milik class itu sendiri

class Ara {
  static cowok = "Afif";
  static cewek = "Rara"; 
}
const ara = new Ara();
console.log(ara.cowok); // undefined
console.log(ara.cewek); // undefined
console.log(Ara.cowok); // Afif
console.log(Ara.cewek); // Rara

// Static Method ==> sama fungsinya dengan static field

class MathUtility {
  static jumlah(...number) {
    let total = 0;
    for(let a of number) {
      total += a;
    }
    return total;
  }
}

// const jumlahkan = MathUtility.jumlah(10,20,30);
// console.log(jumlahkan);

console.log(MathUtility.jumlah(10,20,30));







