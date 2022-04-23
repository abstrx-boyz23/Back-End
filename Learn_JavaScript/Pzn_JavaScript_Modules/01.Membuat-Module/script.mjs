// @affdn-nrflh | April, 17 2022

const name = "Afifudin Nurfalah";

function tdkDipakai() {
	console.log("Hanya Contohhh !!!");
}
function sayHello(name) {
	console.log(`Hello ${name} !!!`);
}
function sayGoodBye(name) {
	console.log(`Good bye ${name} !!!`);
}

export {sayHello, sayGoodBye, name}

/*
Notes : 

# Tanpa Module
● Sebelum kita membahas JavaScript Module, sekarang kita akan coba dulu tanpa menggunakan 
module
● Saat kita membuat file JavaScript, lalu kita load file JavaScript tersebut di web, secara default 
semua kode JavaScript di file tersebut bisa diakses, baik itu variable, function atau class

# Dengan Module
● Namun jika kita menggunakan module, kita bisa secara selektif memilih bagian kode mana yang 
ingin kita ekspos keluar
● Secara default kode yang kita buat menggunakan JavaScript Module tidak bisa digunakan dari luar 
file, kecuali kita memintanya untuk mengekspos keluar


*/