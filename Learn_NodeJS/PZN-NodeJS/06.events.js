// affdn-nrflh23 | April, 21 2022

let events = require("events");

const emitter = new events.EventEmitter();
emitter.addListener("say", name => {
	console.log(`Hello ${name} (1)`);
});
emitter.addListener("say", name => {
	console.log(`Halo ${name} (2)`);
});

emitter.emit("say", "Afif");
emitter.emit("say", "Rara");

/*
Keterangan : 

emitter.addListener(eventName, callback)
emitter.emit(eventName, argument (jika callback memiliki argument))
*/