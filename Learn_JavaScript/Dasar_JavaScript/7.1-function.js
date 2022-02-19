
// # ============== FUNCTION ================ #
//  ■□ ==== Contoh Menulis Function ==== □■

// Mencari Keliling Dan Luas Persegi Panjang
// function 
function kelilingDanLuasPersegiPanjang(panjang,lebar) { // parameter
	return  2 * (panjang + lebar);
}
console.log(kelilingDanLuasPersegiPanjang(2,4));// argument

// Function Expression
let kurang = function(a,b) {
  return a - b;
};
console.log(kurang(3,1));

// ========= PROGRAMMER ZAMAN NOW ==========

// Default Parameter
function say(nama1, nama2 = 'Rara') {
  console.log(`${nama1} & ${nama2}`);
}
say();
say('Afif');
say('Afif','Udin');
say('Afif',null);
say('Afif',undefined);

// Rest Parameter
function total(nama,...nilai) {
  let total = 0;
  for (let items of nilai) {
    total += items;
  }
  console.log(`Total ${nama} adalah ${total}`);
}
total('Anggur',10,10,10,10,10);

  // Spread Syntax di Rest Parameter (gunanya untuk mengkonversi array ke rest parameter)
  const values = [5,5,5,5,5]
  console.log(total('valueArray',...values));

// Arguments (Cara Lama Mirip Rest Parameter, Tapi Lebih Baik Menggunakan Rest Parameter)
function oldTotal() {
  let oldTotal = 0
  for(let items of arguments) {
    oldTotal += items
  }
  console.log(`Total adalah ${oldTotal}`);
}
oldTotal(1,1,1,1,1)
oldTotal('a',1,1,1,1,1) // Semua Parameter Dianggap Arguments

// Function Sebagai Value
function tambahAngka(a,b) {
  return a + b;
}
let tambah = tambahAngka;
console.log(tambah(2,4));
console.log(tambahAngka(5,4));

// Function Sebagai Parameter
function print(callback) {
  callback('Afif')
}
print(say) // line-21

// Function Di Dalam Function
function diluar(name) {
  function didalam() {
    console.log(`Hello ${name}`);
  }
  didalam();
}
diluar('udin')

// Function Generator
  // Function Generator Sederhana
  function* callMe() {
    yield 'Afifudin';
    yield 'Nurfalah';
  }
  for (let name of callMe()) {
    console.log(name);
  }
  // Function Generator Kompleks
  function* genap(a) {
    let result = [];
    for (var i = 1; i <= a; i++) {
      if (i % 2 === 0) {
        console.log(`ini yield ${i}`);
        result.push(i);
      }
    }
    return result;
  }
  for (let angka of genap(100)) {
    console.log(angka);
  }
  

