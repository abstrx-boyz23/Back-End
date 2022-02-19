# BAB OPERASI DAN MANIPULASI STRING

# 1. Menyambungkan String (Concatenate)

awal = "Muhammad"
tengah = "Zamanul"
akhir = "Haqqi"

lengkap = awal+" "+ tengah+" "+ akhir
print("\n"+lengkap)

a = "ABCDEFGHI"
print("\n"+a)
print()

# 2. Menghitung Panjang String
pjg = len(a)
print("Panjang String diatas adalah",pjg)
print()

# 3. Operator Untuk String

# Mengecek apakah ada huruf tertentu di dalam sebuah kalimat

# in
contoh = "Z"
hasil = contoh in a
print('Apakah pada kalimat '+a+' ada huruf "Z" ? ' + str(hasil))
print('Apakah pada kalimat ',a,'ada huruf "Z" ? ',hasil)

# Fungsi (,) dan (+) hampir sama
print()

# not in
contoh = "ZD"
hasil = contoh not in a
print('Apakah pada kalimat '+a+' tidak ada huruf "Zam" ? ' + str(hasil))


# mengulang String
print("\njamanul-bego "*5)
print()

# indexing
print("\nindex huruf ke-0 : "+a[0])
print("index huruf ke-(-7) : "+a[-7])
print("index huruf ke-(0:5) : "+a[0:5])
print("index huruf ke-(0:9:4) : "+a[0:9:4])
print()

# mencari huruf paling kecil
print("Huruf paling kecil : "+ min(a))
# mencari huruf paling besar
print("Huruf paling besar : "+ max(a))
print()

# Assci Code
assci_code = ord("A")
print('ASSCI code untuk huruf "A" adalah '+ str(assci_code))
nilai = 66
print('Char untuk nilai 66 : '+ chr(nilai))
print()

# Menghitung jumlah huruf dlm sebuah String
total = lengkap.count("m")
print ('Total huruf "m" dalam kalimat '+lengkap+' adalah '+ str(total))
print
























