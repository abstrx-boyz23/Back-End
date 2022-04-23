// affdn-nrflh23 | April, 16 2022

const target = {};
const handler = {
	get: function (target, prop) {
		console.log(`Access property ${prop}`);
		return target[prop];
	},
	set: function (target, prop, value) {
		console.log(`Change property ${prop} : ${value}`);
		target[prop] = value;
	}
}

// Create Proxy
const proxy = new Proxy(target, handler);
proxy.firstName = "Afifudin";
proxy.lastName = "Nurfalah";

console.log(proxy.firstName);
console.log(proxy.lastName);

/*
Masihh bingungg wkwkwk, nanti belajar lagi...
*/






