// affdn-nrflh23 | April, 16 2022

// Encode & Decode pada Base64
const original = "Afifudin Nurfalah";
console.log(original);

const encoded = btoa(original);
console.log(encoded);
const decoded = atob(encoded);
console.log(decoded);

/*
Base64 Function :
~ btoa(value) Encode ke base64 dari value
~ atob(encoded) Decode dari base64 ke value

*/


