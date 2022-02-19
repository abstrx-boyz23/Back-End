## MATERI IF, ELIF, ELSE

# IF 

print()
angka1 = int(input("Masukan Angka ke 1 : "))
angka2 = int(input("Masukan Angka ke 2 : "))

if angka1 < angka2 :
  print (angka1,'kurang dari',angka2)
if angka1 > angka2:
	print (angka1,'lebih dari',angka2)
if angka1 == angka2:
	print (angka1,'sama dengan',angka2)
if angka1 != angka2:
	print (angka1,'tidak sama dengan',angka2)
	
''' Kesimpulannya:
	if akan dieksekusi semua nya yang nilainya true
'''


# IF + ELSE

print()
angka1 = int(input("Masukan Angka ke 1 : "))
angka2 = int(input("Masukan Angka ke 2 : "))

if angka1 < angka2 :
	print (angka1,'kurang dari',angka2)
else :
	print(angka1,'lebih dari',angka2)

''' Kesimpulannya :
	else hanya bisa satu kali
'''

	
# IF + ELIF

print()
angka1 = int(input("Masukan Angka ke 1 : "))
angka2 = int(input("Masukan Angka ke 2 : "))

if angka1 < angka2 :
	print (angka1,'kurang dari',angka2)
elif angka1 > angka2:
	print (angka1,'lebih dari',angka2)
elif angka1 == angka2:
	print (angka1,'sama dengan',angka2)
elif angka1 != angka2 :
	print (angka1,'tidak sama dengan',angka2)

''' Kesimpulannya :
	jika terdapat elif, maka yang dieksekusi hanya jawaban yang paling atas
'''
print()


angka = int(input("Masukan Angka Yang Ke 1 : "))
data = str(input("Masukan data  : "))
angka1 = int(input("Masukan Angka Ke 2: "))
data1 = str(input("Masukan data ke 2 : "))
 
if angka == data :
	if data1 == angka1 :
		print ("Angka dan Data ~> Sama")
	else:
		print("Tidak Sama")
	
else:
	print("Semuanya salah")

# Contoh Masalah IF + ELSE (1)

a = str(input("Apakah Nilai PHB IT anda di atas 75 ? [IYA / TIDAK] = "))

if a == "IYA" :
	print("Selamat Anda Lolos !!")
else :
	print("Maaf Anda Harus Remidial")

# Contoh Masalah IF + ELSE (2)

''' Program Untuk mengecek diskon dan bonus belanja'''

total_belanja = int(input("Total harga belanja yg harus dibayar = "))


if total_belanja > 50000:
	print("Total Belanja Anda Lebih Dari 50,000")
	print("Selamat Anda Dapat Bonus Piring Pecah dan Diskon 10%")
	
	diskon = total_belanja * (10/100) # 10% = 10/100
	
	bayar = total_belanja - diskon 
	print("Total Diskon Anda =",diskon)
	print("Total Yg Harus Dibayar = ",bayar)
	print()
	print("Terima Kasih Sudah Membeli, Datang Lagi Yahh")
	
	
else :
	print("Terima Kasih Sudah Membeli, Datang Lagi Yahh")
	
# Contoh Masalah IF + ELIF + ELSE
 

















