

// ============ WEB_PROGRAMMING_UNPAS ============
  // ========= Object.create() ==========

/*
// Cara Kurang Efektif

const methodPlayer = {
  istirahat : function (jam) {
    this.energi += 1.2 * jam;
    console.log(`Selamat beristirahat, ${this.nama}`);
  },
  belajar : function (jam) {
    this.energi -= 1.5 * jam
    console.log(`Selamat belajar, ${this.nama}`);
  }
}

// Function Declaration (Object.create)
function createPlayer (nama,energi = 10) {
  const player = Object.create(methodPlayer);
  player.nama = nama;
  player.energi = energi;
  // player.istirahat = methodPlayer.istirahat;
  // player.belajar = methodPlayer.belajar
  
  return player;
}

const player1 = createPlayer('Afif');
*/


// Object Prototype
// Ini Lebih Efektif
function Player (nama,energi = 10) {
  this.nama = nama;
  this.energi = energi;
}

Player.prototype.belajar = function (jam) {
  this.energi -= 1.5 * jam;
  return `Selamat belajar, ${this.nama}`;
};
Player.prototype.istirahat = function (jam) {
  this.energi += 1.2 * jam;
  return `Selamat beristirahat, ${this.nama}`;
};

const player1 = new Player('Afif');

/*
// Versi Class
class Player {
  constructor (nama,energi = 10) {
    this.nama = nama;
    this.energi = energi;
  }
  belajar (jam) {
    this.energi -= 1.5 * jam;
    return `Selamat belajar, ${this.nama}`;
  }
  istirahat (jam) {
    this.energi += 1.2 * jam;
    return `Selamat beristirahat, ${this.nama}`;
  }
}
const player1 = new Player('Afif',100);
*/



