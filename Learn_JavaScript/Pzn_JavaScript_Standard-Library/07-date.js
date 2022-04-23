// affdn-nrflh23 | April, 14 2022

// Create Object Date (Number)
console.log("====== Number ======");

const date = new Date().getTime();
console.log(`Date Now (Normal) : ${date}`);

const date1 = new Date(2022, 3, 14, 10).getTime();
console.log(`Date1 : ${date1}`);

const date2 = new Date(2004, 12, 14, 0, 0, 0, 0).getTime();
console.log(`Date2 : ${date2}`);

/* 
Notes : Format harus urut 
(year, month, date, hours, minutes, second, milisecond)
*/ 

// Create Object Date (String)
console.log("===== String ======");

const dateNumber = new Date(2020, 3, 14).getTime()
console.log(`Date (number) : ${dateNumber}`);

const dateString = new Date("14, 2020 apr").getTime()
console.log(`Date (string) : ${dateString}`);

// mirip number tapi lebih fleksibel

// Epoch & Unix Timestamp 
console.log("===== Epoch & Unix Timestamp =====");

const timestamp = Date.now();
console.log(`Timestamp : ${timestamp}`);

const dateUnix = new Date(timestamp);
console.log(`Date Unix : ${dateUnix}`);

// Parsing Date
console.log("===== Parsing Date =====");

const parseTimestamp = Date.parse("2022-04-14T00:00:00.125+0700")
console.log(parseTimestamp);

const parseTimestamp1 = new Date("2022-04-14 GMT+7").getTime()
console.log(parseTimestamp1);

/*
Notes:
Format Date (harus String) 
YYYY-MM-DD 
YYYY-MM-DDTHH:mm:ss.sss
YYYY-MM-DDTHH:mm:ss.sssZ

Ket :
YYYY = Tahun
MM   = Bulan
DD   = Tanggal
T    = Pemisah tanggal dan waktu
HH	 = Jam
mm	 = Menit
ss	 = Detik
sss  = Milidetik
Z 	 = Timezone (for Indo = GMT+7 / +0700)
*/

// Experimen Tanggal 1, January 1970
const beforeUnix = new Date("1, jan 1970 GMT-0").getTime();
console.log(beforeUnix);

/* KESIMPULAN : 
~ Date dan new Date() => itu mirip bedanya klo new Date() memiliki Getter and Setter
~ Month and Day index dimulai dari 0
~ Date merupakan representasi milisecond sejak tanggal 1 Januari 1970, atau dikenal dengan Epoch & Unix Timestamp
*/ 










