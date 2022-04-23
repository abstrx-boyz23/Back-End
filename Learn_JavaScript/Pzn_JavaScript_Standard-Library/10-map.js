// affdn-nrflh23 | April, 15 2022

// Create Map
const data = new Map();
data.set("Name", "Afifudin");
data.set("City", "Tegal");
data.set("Age", "17")

console.log(data);
console.log(data.get("Name"));
console.log(data.get("City"));

// for (let elemnt of data) {
// 	console.log(`${elemnt[0]} : ${elemnt[1]}`);
// }

data.forEach((value,key) => console.log(`${key} : ${value}`));


/*
Kesimpulan :
● Map merupakan representasi dari struktur data key-value
● Map mirip dengan tipe data object, hanya saja pada Map, 
semua method untuk manipulasi data sudah disediakan
● Map mengikuti kontrak iterable, sehingga bisa di iterasi secara default


Perbedaan Map Dan Object

# Map 
~ Pertama dibuat, tidak memiliki key 
~ Key bisa tipe data apapun 
~ Jumlah key bisa diketahui dengan mudah dengan attribute size
~ Secara default tidak bisa dikonversi ke JSON

# Object
~ Karena memiliki prototype, maka bisa jadi memiliki default key ketika pertama dibuat
~ Key hanya bisa string atau symbol
~ Tidak bisa diketahui, harus manual menggunakan iterasi
~ Bisa dikonversi ke JSON secara otomatis


==== Method & Property ====

size							 => Panjang Map
clear() 					 => Menghapus semua isi Map
delete(key) 			 => Menghapus data Map berdasarkan key
get(key) : value	 => Mendapatkan data Map berdasarkan key
has(key) : boolean => Mengecek apakah Map berisi data key
set(key, value) 	 => Mengubah data Map dengan key = value
forEach((value,key) => key : value ) => Melakukan iterasi Map

*/