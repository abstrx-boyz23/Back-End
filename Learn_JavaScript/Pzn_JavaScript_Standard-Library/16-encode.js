// affdn-nrflh23 | April, 16 2022

// encodeURI & decodeURI
const url = "https://contoh.com/?name=Afif Rara";
console.log(url);

const encoded = encodeURI(url);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// encodeURIComponent && decodeURIComponent
const url1 = "https://contoh.com/?name=";
const value = "Afif&Rara=Bestiee";

const encodedComp = encodeURIComponent(value);
console.log(url1 + encodedComp);
const decodedComp = decodeURIComponent(encodedComp);
console.log(url1 + decodedComp);

/*
@ Encode & Decode Function

~ encodeURI(value)	 => Melakukan encode value, namun karakter yang dipesan 
	di URI tidak akan diubah ;,/?:@&=+$#
~ decodeURI(encoded) => Melakukan decode value hasil encodeURI()

~ encodeURIComponent(value)   => Melakukan encode value semua karakter
~ decodeURIComponent(encoded) => Melakukan decode value hasil encodeURIComponent()

*/

