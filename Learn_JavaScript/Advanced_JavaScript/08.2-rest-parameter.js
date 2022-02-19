 
// =========== WEB_PROGRAMMING_UNPAS =========== 
    // ========= Rest Parameter ==========

// Function
const contoh = (a,...b) => b;
console.log(contoh(1,2,3,4,5));

// Destructuring 
const kelompok = {
  cowo : 'Afif',
  cewe : 'Rara',
  anakBuah1 : 'ga punya nama',
  anakBuah2 : 'duyung dayani',
  anakBuah3 : 'entah siapa aku'
}
const {cewe,cowo,...anakbuah} = kelompok;
console.log(`${cowo} dan ${cewe}`);
console.log(anakbuah);

// Filtering
const filter = (type,...nilai) => nilai.filter(a => typeof(a) === type);
console.log(filter('number', 2,3,true,'halo',false,'gava'));


