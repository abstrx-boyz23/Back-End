// Class : Super Method

class Penjumlahan {
  hitung (a, b) {
    console.log(`Penjumlahan dari ${a} + ${b} = ${a+b};`);
  }
}
class Pengurangan extends Penjumlahan {
  hitung (a, b){
    console.log(`Pengurangan dari ${a} - ${b} = ${a-b};`);
    
    // super.method fungsinya untuk memanggil method dari parent tetapi memiliki nama method yang sama
    super.hitung(4,5)
  }
}

const penjumlahan = new Penjumlahan();
const pengurangan = new Pengurangan();

penjumlahan.hitung(10,20);
pengurangan.hitung(6,3);

console.log(penjumlahan);
console.log(pengurangan);


