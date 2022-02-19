// ===== Core Module =====

// 1. File System
const fs = require("fs");

/*
// Menulis string ke file secara Synchronous
try {
  fs.writeFileSync("sync.html", "<h1>Hello World Secara Synchronous</h1>");
} catch (err) {
  console.log(err);
}

// Menulis string ke file secara Asynchronous
fs.writeFile("async.html", "<h1>Hello World Secara Asynchronous</h1>", err => {
  console.log(err);
})

// Membaca isi file secara Synchronous
const sync = fs.readFileSync("sync.html","utf-8");
console.log(sync);


// Membaca isi file secara Asynchronous

fs.readFile("async.html","utf-8", (err, result) => {
  if (err) throw err;
  console.log(result);
});
// console.log(result1);
*/


// 2. Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
rl.question("Masukan nama anda : ", nama => {
  rl.question("Masukan nama sekolah : ", sekolah => {
    
    console.log(`Terimakasih ${nama}`);
    console.log(`Sekolah anda di ${sekolah}`);
    rl.close();
    
  });
});
*/

// Membuat Contacts Sederhana
rl.question("Masukan nama anda : ", nama => {
  rl.question("Masukan nomor hp anda : ", noHp => {
    const data = {nama, noHp};
    const contacts = JSON.parse(fs.readFileSync("data/contacts.json", "utf-8"));
    contacts.push(data)
    
    fs.writeFile("data/contacts.json", JSON.stringify(contacts) , err => {
      console.log(err);
    })
    
    console.log(`\nData Telah Dikirim!!`);
    console.log(contacts);
    rl.close();
  });
});









// ===== (NPM Modules) ====
// Prompt-Sync

// const prompt = require("prompt-sync")();
// const name = prompt("What's your name ? ");
// console.log(`Hello ${name}!!`);



