// Local Module
function sayHello(nama) {
  return `Hallo ${nama}`;
}

const rara = "Rara";

class XIIMipa1 {
  constructor (nama,absen){
    this.nama = nama;
    this.absen = absen
  }
  perkenalan(){
    return `Halo, perkenalkan nama saya ${this.nama}, nomor absen ${this.absen}`;
  }
}

// module.exports = sayHello; // cara salah
module.exports = {sayHello, rara, XIIMipa1};





