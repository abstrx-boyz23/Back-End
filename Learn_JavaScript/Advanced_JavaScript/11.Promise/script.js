// Belajar Promise (Asynchronous)

/*
// 1. Ajax (Callback)
function getData(url, success) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success(xhr.response);
    }
  }
  xhr.open("GET",url,true);
  xhr.send();
  
}
getData('https://www.omdbapi.com/?apikey=50876211&s=harry', result => console.log(result));

// 2. Fetch (Promise) => Lebih singkat dar ajax (calkback)

// const movies = fetch("https://www.omdbapi.com/?apikey=50876211&s=harry");
// console.log(movies);         // result Promise

fetch("https://www.omdbapi.com/?apikey=50876211&s=harry")
  .then(response => console.log(response.json()))
  .then(response => console.log(response));
*/



/* Promise
Sebuah Object yang merepresentasikan success / error dari sebuah event asynchronous yang terjadi di masa depan

Janji (Ditepati / Ingkar / Proses)
state (fulfilled / rejected / pending)

callback (resolve / reject / finally)
method (then / catch)
*/



/*
// Contoh 1
const berhasil = true;
const melawanNafsu = new Promise((resolve, reject) => {
  if (berhasil) {
    resolve("Kamu Berhasil Melawan Nafsu!");
  } else {
    reject("Kamu Gagal, Ayo Coba Lagi!");
  }
});

melawanNafsu
  .then(response => console.log(`Success : ${response}`))
  .catch(response => console.log(`Failure : ${response}`))
*/




// Contoh 2
const berhasil = true;
const melawanNafsu = new Promise((resolve, reject) => {
  if (berhasil) {
    setTimeout(function() {
      resolve("Ternyata Kamu Berhasil Melawan Nafsu!");
    }, 2000);
  } else {
    setTimeout(function() {
      reject("Ternyata Kamu Gagal, Ayo Coba Lagi!");
    }, 2000);
  }
});




/* Lebih Rumit

console.log("Mulai");
console.log(melawanNafsu);

melawanNafsu
  .then(response => console.log(melawanNafsu))
  .catch(response => console.log(melawanNafsu))
*/


// console.log("Mulai"); // agar pending nya terlihat
// console.log(melawanNafsu.then(() => console.log(melawanNafsu)));


console.log("Mulai");
console.log(melawanNafsu);
melawanNafsu
  .finally(() => console.log("Setelah Berjihad"))
  .then(response => console.log(response))
  .catch(response => console.log(response));



/*
// Promise.all()
const ipa1 = new Promise(resolve => {
  setTimeout(function() {
    
    // Array of Object
    resolve({
      absen1 : "Adhe Maya",
      absen2 : "Afifudin",
      absen3 : "Amanda"
    });
    
  }, 1500);
});

const ipa2 = new Promise(resolve => {
  
  setTimeout(function() {
    resolve({
      absen1 : "Ga tau",
      absen2 : "Ga mau tau",
      absen3 : "Awaludin"
    })
  }, 1000);
  
});

Promise.all([ipa1, ipa2])
  // .then(response => console.log(response))
  .then(response => {
    const [ipa1, ipa2] = response;
    
    // Ipa 1
    console.log(ipa1.absen1);
    console.log(ipa1.absen2);
    
    // Ipa 2
    console.log(ipa2.absen3);
    
  });
*/