con.query(queryPut, (err,result) => {
	if (err) throw err;
	res.status(200).json({
		message: `Put Method Siswa No.${no} Successfully`,
		dataChanged: {
			before: {
				nama: namaLama,
				hobi: hobiLama
			},
			after: {
				nama: namaBaru,
				hobi: hobiBaru
			}
		}
	});
});