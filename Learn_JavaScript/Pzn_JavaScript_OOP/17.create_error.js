// Class : Membuat Error Manual

class ValidationError extends Error {
  constructor(message, field){
    super(message);
    this.field = field;
  }
}

class MathUtility {
  static jumlah(...angka) {
    if (angka.length === 0) {
      throw new ValidationError("Maaf, Function MathUtility.jumlah() Harus Di Isi Parameternya", "Number")
    }
    
    let total = 0;
    for (let a of angka){
      total += a
    }
    return total;
  }
}
try {
  console.log(MathUtility.jumlah(10,20,30));
  console.log(MathUtility.jumlah());
  console.log("Hello World");
  
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`Terjadi Error : ${err.message} Pada Field ${err.field}`);
  } else {
    console.log(`Terjadi Error : ${err.message}`);
  }
}

