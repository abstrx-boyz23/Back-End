// affdn-nrflh23 | April, 24 2022

let url = require("url");

const pzn = new url.URL("https://www.programmerzamannow.com/belajar?jeniskelamin=pria")

pzn.host = "www.nurfalah.com";
const searchParams = pzn.searchParams;
searchParams.append("status", "jomblo");

console.log(`URL.toString() : ${pzn.toString()}`);
console.log(`URL.href : ${pzn.href}`);
console.log(`URL.host : ${pzn.host}`);
console.log(`URL.pathname : ${pzn.pathname}`);
console.log(pzn.searchParams);

// pzn.searchParams get() and set()
searchParams.set("status", "jaga-hati");
console.log(searchParams.get("status"));
