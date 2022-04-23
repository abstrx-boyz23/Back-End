// affdn-nrflh23 | April, 15 2022

// Create RegExp
const regex1 = /[a]/;
const regex2 = new RegExp("[a]")
const regex3 = new RegExp(/[a]/)

console.log(regex1);
console.log(regex2);
console.log(regex3);

// RegExp Instance Method
const name = "Afif dan Rara";
const regex = /Afif/;

const result = regex.exec(name);
console.log(result);
const test = regex.test(name);
console.log(test);

/*
Keterangan :
~ exec(value) : result	 => Eksekusi regex, jika menemukan data 
sesuai pola, maka kembalikan result nya, jika tidak maka null

~ test(value) : boolean  => Eksekusi regex, jika menemukan data 
sesuai pola, maka return true, jika tidak maka false
*/

// RegExp Modifier
const name1 = "Afif dan Rara\naFif dan rAra\nafif dan rara";
const regex4 = /Afif/g;
const regex5 = /rara/ig

let result1;
while((result1 = regex4.exec(name1)) !== null){
	console.log(result1);
}
while((result1 = regex5.exec(name1)) !== null){
	console.log(result1);
}

/*
Masih bingung wkwkwk, nanti dipelajarin lagi.. 
*/



