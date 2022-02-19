/*
// Synchronous

const dapur = meja => {
  const pesanan = meja === 1 ? "Nasi Goreng" : "Es Teh";
  return {meja, pesanan};
}

const meja1 = dapur(1);
console.log(meja1);

const meja2 = dapur(2);
console.log(meja2);

const pswrdWifi = "yoNdakTau!!";
console.log(`Password Wifi : ${pswrdWifi}`);
*/

// Asynchronous

const dapur = (meja, callback) => {
  const waktu = meja === 1 ? 3000 : 2000;
  setTimeout(function() {
    const pesanan = meja === 1 ? "Nasi Goreng" : "Es Teh";
    callback({meja, pesanan});
  }, waktu);
}

const meja1 = dapur(1, hasil => {
  console.log(hasil);
});

const meja2 = dapur(2, hasil => {
  console.log(hasil);
});

const pswrdWifi = "yoNdakTau!!";
console.log(`Password Wifi : ${pswrdWifi}`);

const a = 123;

/*
// Cara Gua (Asynchronous)

const dapur = meja => {
  const waktu = meja === 1 ? 3000 : 2000;
  setTimeout(function() {
    const pesanan = meja === 1 ? "Nasi Goreng" : "Es Teh";
    console.log({meja, pesanan});
  }, waktu);
}

const meja1 = dapur(1)
console.log(meja1);

const meja2 = dapur(2)
console.log(meja2);

const pswrdWifi = "yoNdakTau!!";
console.log(`Password Wifi : ${pswrdWifi}`);
*/