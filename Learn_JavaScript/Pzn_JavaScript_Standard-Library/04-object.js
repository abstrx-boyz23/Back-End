// affdn-nrflh23 | April, 14 2022

// Object Freeze & Seal
const me = {
	name: "Afifudin",
	city: "Tegal"
};
Object.seal(me);				// property object bisa diubah tapi tidak bisa dihapus
Object.freeze(me);			// property object tidak bisa diubah maupun dihapus

me.city = "Ganti Kota"	// tidak bisa diganti
delete me.name; 				// tidak bisa dihapus
console.log(me);

// Object Assign
const target = { firstName: "Afifudin" }
const source = { lastName: "Nurfalah", age: 17 }

Object.assign(target, source) // menggabungkan property object dari source ke target
console.log(target);


