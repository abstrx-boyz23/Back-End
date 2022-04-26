// affdn-nrflh23 | April, 24 2022

let https = require("https");
const data = JSON.stringify({
	nama: "Afifudin Nurfalah",
	umur: "18",
	ttl: "Tegal, 14 Desember 2004"
});


const url = "https://hookb.in/jePXjDdyQgt9dlMMmO1L";
const request = https.request(url, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
	}
}, response => {
		response.addListener("data", data => {
			console.log(`Receive : ${data.toString()}`);
		})
})

request.write(data);
request.end();
