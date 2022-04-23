// affdn-nrflh23 | April, 15 2022

// Create Set
const myData = new Set();
myData.add("Afif")
myData.add("Afif")
myData.add("Rara")

console.log(myData);
myData.forEach(value => console.log(value));

/*
Kesimpulan :
● Set merupakan implementasi dari struktur data yang berisikan data-data unique
● Set mirip seperti Array, hanya saja isi datanya selalu unique
● Jika kita menambahkan data yang sama, maka data hanya akan diterima satu saja
● Set mengimplementasikan kontrak iterable, sehingga bisa diiterasi secara default


==== Method & Property ====
size										=>> Panjang Set
add(value)							=>> Menambah data ke Set
has(value)							=>> Mengecek apakah Set memiliki value
delete(value) 					=>> Menghapus value dari Set
forEach(value => value) =>> Melakukan iterasi Set

*/