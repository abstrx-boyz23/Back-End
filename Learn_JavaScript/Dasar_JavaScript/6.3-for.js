
// # ============ Pengulangan ============= #
//  ■□ ======== For ======== □■

for (let i = 1; i <= 10 ; i += 1) {
	console.log(`Siswa SMP Negeri ${i} Tegal`);
}

// Perbedaan i++ dan ++i

// let i = 1;
// let a = i++;
// // let b = ++i;
// console.log(a);
// // console.log(b);
// console.log(i);

// // a = i++ => a = i; i = i + 1;
// // b = ++i => b = i + 1 ; i = i

// let y = 0;
// for (let i = 0; i < 3; i++) {
//   console.log(++y);
// }

/* Kesimpulan :
y++ => y = 0; y = y + 1;
              y = 1
++y => y = y + 1; y = 1;
       y = 1

Jika (++) didepan, maka ditambah dulu baru ditampilkan.
Sedangkan jika (++) dibelakang, maka ditampilkan dlu baru ditambah
*/ 

// =========《PROGRAMMER ZAMAN NOW》==========
// For In
  // For In (Dalam Object)
  let siswa = {
    nama : 'udin',
    kelas : 'xii mipa 1',
    no : 2
  };
  for (let property in siswa) {
    console.log(`${property} : ${siswa[property]}`);
  }
  // For In (Dalam Index)
  let nama = ['rara','afif','orang'];
  for (let index in nama) {
    console.log(`${index} : ${nama[index]}`);
  }

// // For Of (Iterables)
//   // Pada Array
//   const names = ['Afif','Udin','Rara'];
//   for (let value of names) {
//     console.log(value);
//   }
//   // Pada String 
//   const firstname = 'AFIFUDIN';
//   for (let string of firstname) {
//     console.log(string);
//   }
