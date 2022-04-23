// @affdn-nrflh | April, 17 2022

// Module Default Variable, Function, Class (Mirip)

function say (name) {
	console.log(`Hello ${name}, from Default Module`);
}
function sayGoodBye(name) {
	console.log(`Good Bye ${name}, from Named Module`);
}

export {sayGoodBye};
export default say;





