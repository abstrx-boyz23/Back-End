// <== Class : Error Handling ==>
// Try, Catch, Finally

class MathUtility {
  static jumlah(...angka) {
    if (angka.length === 0) {
      throw new Error("Function MathUtility.jumlah() Harus Di Isi Parameternya")
    }
    
    let total = 0;
    for (let a of angka){
      total += a
    }
    return total;
  }
}

// 1.
try { 
  // console.log(MathUtility.jumlah());
  console.log(MathUtility.jumlah(10,20,30));
  // console.log(MathUtility.jumlah());
  console.log(MathUtility.jlmh());
  
  // Saat Throw dijalankan (Terjadi Error) maka kode program akan berhenti
  // throw new Error("Function MathUtility.jumlah() Harus Di Isi Parameternya")
  console.log("Hello World 1");

// 2.
} catch (err) { // errornya ditangkap
  console.log(`Terjadi Error : ${err.message}`);

// 3. 
} finally {
  console.log("Kode ini tetap di dijalankan entah ada error maupun tidak.");
}


console.log("Hello World 2"); // tetap dijalankan karena diluar block try

/* 
Kesimpulan :
1. Try = Mencoba Kode, Jika Terjadi Error Maka Kode Dibawahnya Tidak Dijalankan (Berhenti)
2. Catch = Jika Terjadi Error, Maka Error Ditangkap Dan Kode Dalam Catch Dijalankan. Tapi Jika Tidak Ada Error, Maka Kode Dalam Catch Tidak Dijalankan
3. Finally = Bodoamat, Tetap Menjalankan Kode Program Entah Ada Error Maupun Tidak
*/

// Try Finally
class Counter {
  // constructor(){
  //   this.nilai = 1;
  // }
  #nilai = 1;
  
  next(){
    // return this.#nilai++;
    
    try {
      return this.#nilai;
    } finally {
      return this.#nilai++;
    }
  }
}
const count = new Counter();
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());







