// affdn-nrflh23 | April, 16 2022

const me = {};
Reflect.set(me, "firstName", "Afifudin");
Reflect.set(me, "lastName", "Nurfalah");

console.log(me);

console.log(Reflect.has(me, "firstName"));
console.log(Reflect.has(me, "middleName"));

/*
Kesimpulan Dari PZN :
● Reflect merupakan class yang digunakan untuk mengeksekusi JavaScript function
● Reflect tidak memiliki constructor, dan cara penggunaan Reflect tidak dengan membuat object 
dengan new Reflect
● Penggunaan Reflect adalah menggunakan banyak sekali static methodnya

Notes : Tapi saya masih bingung, fungsinya buat apa.. Nanti kita pelajari lagi..


*/


