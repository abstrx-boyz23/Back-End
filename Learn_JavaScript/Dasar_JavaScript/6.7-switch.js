
// # ============ Pengulangan ============= #
//  ■□ ======== Switch ======== □■

let lagi = true
while (lagi === true) {
  let namaHewan = prompt('Masukan Nama Hewan : \n( cth : ayam | kucing | burung )')
  switch (namaHewan) {
  	case 'ayam':
  		alert('Anda memilih Ayam')
  		break;
  	case 'kucing':
  		alert('Anda memilih kucing')
  		break;
  	case 'burung':
  		alert('Anda memilih burung')
  		break;
  	
  	default:
  		alert('Maaf keyword salah !!')
  		break
  }
lagi = confirm('Mau Lagi ?')
}