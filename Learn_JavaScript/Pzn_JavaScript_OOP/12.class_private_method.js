// <== Class Field ==>

// Class : Private Method

 class Orang {
  
  ucapSalam(nama) {
    if (nama) {
      return this.#sapaanDenganNama(nama);
    } else {
      return this.#sapaanTanpaNama();
    }
  }
  
  #sapaanDenganNama(nama) {
    console.log(`Halo ${nama}`);
  }
  #sapaanTanpaNama() {
    console.log("Halo...");

  }
  
}
const eko = new Orang();
// eko.#sapaanTanpaNama();  akan error
eko.ucapSalam();

