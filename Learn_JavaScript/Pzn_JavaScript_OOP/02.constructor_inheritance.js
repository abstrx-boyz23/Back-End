// <== Constructor Function ==>

// Inheritance
function Orang(nama, umur) {
  this.nama  = nama;
  this.umur  = umur
  this.salam = () => `Halo, Selamat Pagi Pak ${this.nama}`;
}

function OrangBaru(nama,asalMana,umur = 17) {
  this.asalMana = asalMana;
  Orang.call(this,nama,umur);
  
  // Dibalik Layar 
  // this.nama = nama;
  // this.umur = umur;
}
const eko = new Orang("Eko",17)
console.log(eko);
const udin = new OrangBaru('Udin','Tegal, Jateng'); 
console.log(udin);
// object yang dibuat pakai Constructor Function dinamakan intance object


