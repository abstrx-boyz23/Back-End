// <== Class Field ==>

// Class : Private Field

class Private {
  
  // private field
  #nilaiAwal = 0;
  
  increment() {
    return ++this.#nilaiAwal;
  }
  
  decrement() {
    return ++this.#nilaiAwal;
  }
  
  get() {
    return this.#nilaiAwal;
  }
  
}
const coba = new Private();
// coba.#nilaiAwal = 100;  akan error

coba.increment();
coba.increment();
coba.increment();
coba.increment();
coba.increment();

console.log(coba);
console.log(`Hasilnya adalah ${coba.get()}`);


