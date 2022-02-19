## MATERI ABOUT METHOD OPERATOR ##
title = " ADMIN-NYA GANTENG EUY ".center(41,"=")
print("\n"+title+"\n")

# mengubah semua huruf menjadi ~~> upper-case
print("#### Upper-Case ####")
x = "maju sini kalo berani !!"
print("normal 'x' = "+x)
ubah_besar = x.upper()
print("\n'x' Jadi Besar Semua ~~> \n= "+ubah_besar)


# mengubah semua huruf menjadi ~~> lower-case

print("\n#### Lower-Case ####")
y = "IrI biLanG Bozzz, HayyuK.."
print("normal 'y' = "+y)
ubah_kecil = y.lower()
print("\n'y' Jadi Kecil Semua ~~> \n= "+ubah_kecil)


## Mengecek Sesuatu Menggunakan     ~IsX Method~


# mengecek upper dalam sebuah string

print("\n#### IsUpper ####")

kasus = "BAPAK SAYA LAKI LAKI"
cek_upper = kasus.isupper()
print("\nApakah pada kalimat '"+kasus+"' \ntermasuk huruf besar semua \n= "+str(cek_upper))


# mengecek lower dalam sebuah string

print("\n#### IsLower ####")

kasus = "bapak saya laki-laki"
cek_lower = kasus.islower()
print("\nApakah pada kalimat '"+kasus+"' \ntermasuk huruf kecil semua \n= "+str(cek_lower))


# mengecek semuanya adalah huruf [selain itu = false]		~isalpha~

print("\n#### IsAlpha ####")

kasus = "BapaksayaLakilaki"
cek_alpha = kasus.isalpha()
print("\nApakah pada kalimat '"+kasus+"' \ntermasuk semuanya huruf \n= "+str(cek_alpha))


# mengecek semuanya angka		 [selain itu = false]        		~isdecimal~

print("\n#### IsDecimal ####")

kasus = "728901"
cek_decimal = kasus.isdecimal()
print("\nApakah pada kalimat '"+kasus+"' \ntermasuk semuanya angka \n= "+str(cek_decimal))


# mengecek semuanya adalah huruf	dan angka					 ~isalnum~

print("\n#### IsAlnum ####")

kasus = "Orang Gila01"
cek_alnum = kasus.isalnum()
print("\nApakah pada kalimat '"+kasus+"' \ntermasuk semuanya huruf \n= "+str(cek_alnum))


# mengecek spasi, tab, newline (\n) ~isspace~

print("\n#### IsSpace ####")

kasus = "Orang Gila01"
cek_space = kasus.isspace()
print("\nApakah pada kalimat '"+kasus+"' \ntermasuk semuanya huruf \n= "+str(cek_space))


# mengecek judul pada string ~istitle~

print("\n#### IsTitle ####")

judul = "Anak Famous"
cek_title = judul.istitle()
print("Apakahh '"+judul+"' \nitu termasuk title \n= "+str(cek_title))

## Pembahasan startswith dan endswith

print("\n#### Startswith ####")

contoh = "Si Udin Adalah Adalah Anak Yg Pandai"
contoh_kasus = "Si Udin Adalah Anak Yg Pandai".startswith("Si")
print("Apakahh pada '"+contoh+"' , 'Si' termasuk startswith \n= "+str(cek_title))


print("\n#### Endswith ####")

contoh = "Si Udin Adalah Adalah Anak Yg Pandai"
contoh_kasus = "Si Udin Adalah Anak Yg Pandai".endswith("Pandai")
print("Apakahh pada '"+contoh+"' , 'Pandai' termasuk endswith\n= "+str(cek_title))

## list
# menggabungkan komponen dari list = join() 

normal =['Kamu Cantik','Sayang']
gabung = " Tapi ".join(normal)
print (normal)
print(gabung,"\n")

# memisahkan komponen list = split()

normal = "Kamu Cantik Tapi Sayang"
print (normal)
print(normal.split(" Tapi "))

## Alokasi karakter(rata kanan, rata kiri, rata tengah)

# Rata kanan (rjust)

contoh = " Abstrx_Boyz".rjust(21,"=")
print(contoh,"\n")

# Rata kiri (ljust)
contoh = " Abstrx_Boyz".ljust(21,"=")
print(contoh,"\n")

# Rata tengah (center)
contoh = " Abstrx_Boyz".center(21,"=")
print(contoh,"\n")

## Menghilangkan Alokasi Karakter = Strip()
contoh = " Abstrx_Boyz".strip("=")
print(contoh)









