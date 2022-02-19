// Class : Error

// // Basicly
// const err = new Error();
// console.log(err);

class MathUtility {
  static jumlah(...angka) {
    angka.forEach(n => {
      if (angka.length === 0 || typeof n !== "number") {
        throw new Error("Parameter Function Tidak Boleh Kosong Dan Harus Berisi Angka!!")
      }
    });
    
    let total = 0;
    for (let a of angka){
      total += a
    }
    return total;
  }
}

// console.log(MathUtility.jumlah());
console.log(MathUtility.jumlah(10,20,30));
console.log(MathUtility.jumlah(10,20,"gshs",30));

// Saat Throw dijalankan (Terjadi Error) maka kode program akan berhenti
throw new Error("Maaf, Function MathUtility.jumlah() Harus Di Isi Parameternya")
console.log("Hello World");

