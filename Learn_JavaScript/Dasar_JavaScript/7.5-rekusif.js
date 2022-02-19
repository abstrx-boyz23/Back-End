
// # ============== FUNCTION ================ #
// ■□ ======== Rekursif ========= □■

// Rekursif = Function yg memanggil dirinya sendiri 

// bisa digunakan sebagai looping
function coba(a) {
  if (a >= 0) { // IF adalah base case yg fungsinya menghentikan looping.
    console.log(a);
    return coba(a - 1);
  }
}
coba(1000000)

// faktorial
function faktorial(a) {
  if (a === 1) {
    return 1;
  }
  return a * faktorial(a - 1);
}
console.log(faktorial(8));






























