// affdn-nrflh23 | April, 14 2022

// Konversi JSON
const myData = [
	{
		firstName: "Afifudin",
		lastName: "Nurfalah",
		age: 17,
		study: [
			"Ilmu Agama",
			"Falsafat", 
			"Pengembangan Diri", 
			"Programming"
		]
	}
];

const parseJSON = JSON.stringify(myData);  // parsing data Object ke JSON
const parseObject = JSON.parse(parseJSON); // parsing data JSON ke Object

console.log(parseJSON);
console.log(parseObject);






