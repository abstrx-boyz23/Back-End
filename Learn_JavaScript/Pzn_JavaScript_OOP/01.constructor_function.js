// <== Membuat Contructor Function ==>

function Orang(nama) {
  this.nama = nama;
  this.salam = () => `Halo, Selamat Pagi Pak ${this.nama}`;
  console.log(this);
}
const eko = new Orang('Eko');
eko.umur = 19;
console.log(eko);
const udin = new Orang('Udin');
console.log(udin);





