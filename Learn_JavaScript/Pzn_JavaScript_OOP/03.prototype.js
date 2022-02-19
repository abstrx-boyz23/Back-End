/* Prototype
Juga memiliki sifat inheritance yaitu pewarisan property
maupun method yang disimpan didalam _proto_(prototype)
*/
function Orang(nama, umur, asalMana) {
  this.nama  = nama;
  this.umur  = umur;
  this.salam = function (){
    return `Halo, Selamat Pagi Pak ${this.nama}`;
  }
}
// Orang.prototype.sampaiJumpa = () => `Sampai Jumpa, ${this.nama}`; // result = undefined karena tdk melakukan hoisting 
Orang.prototype.sampaiJumpa = function (){
  return `Sampai Jumpa, ${this.nama}`;
};

const udin = new Orang('Udin',17,'Tegal');
// Hanya berpengaruh pada instance object tetapi pertama kali dicek
// udin.prototype.makan = function () {
//   return `Selamat makan, ${this.nama}`
// }

const eko = new Orang('Eko',18);
eko.salam = function () {
  return `Hi, my name is ${this.name}`
}

console.log(udin);
console.log(eko);




