
// ============ WEB_PROGRAMMING_UNPAS ============
  // ========= Object.create() ==========

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










