""" Materi While Looping ♧=>> """

# KASUS- 1
print()
angka = 1
while (angka <= 5):
  print("Ini hari ke-",angka,"di sekolah")
  angka += 1 # Fungsinya agar While            looping mau berhenti
print()
""" Kesimpulan :
Hampir mirip seperti For Looping, hanya saja "While" akan terus melakukan Looping kecuali jika dihentikan.
"""
  
# KASUS- 2
hasil = True
while hasil :
  masukan_angka = int(input("Masukan Angka Kurang dari 10 : ")).
  if masukan_angka <= 10:
    hasil = False
    # jika False artinya berhenti
  else:
    hasil = True
    # jika True artinya jalan
print()
""" Kesimpulan :
● Looping akan berhenti jika hasilnya FALSE
● dan akan terus berjalan jika hasilnya TRUE
"""


# KASUS- 3

angka = 1
total = 0
while angka <= 5:
  print ("loop ke-",angka,":",total,"+",angka)
  total += angka
  angka += 1
print("Jumlah Semuanya =",total,"\n")
""" Kesimpulan :
Intinya fungsi (angka += 1) agar looping bisa berhenti
"""


# KASUS- 4
start = True
angka = 0 

while start :
  print("Ini Adalah While")
  if angka == 5:
    start = False
    print("Ini While Terakhir")
  angka += 1
""" Kesimpulan :
Gabungan Kasus- 2 dan Kasus- 3
"""
print()


#<<= =>> =<< >>= <<= =>> =<< >>=#

"""<<=0 ELSE, BREAK, CONTINUE, PASS 0=>>"""


# ELSE + WHILE
angka = 1
while angka <= 5:
  print("Ini Hari Ke-",angka)
  angka += 1
else:
  print("Ini Hari Terakhir Ke-",angka)
  
""" Kesimpulan :
Else bekerja pada bilangan di luar while
"""
print()


# BREAK
angka = 1
while angka <= 5:
  if angka <= 5:
    print("ini pertama",angka)
    print("ini kedua",angka)
    print()
    break
    print("ini ketiga",angka)
    
  """ Kesimpulan :
  Break =>> untuk menstop looping while maupun for, sehingga yg muncul hanya 1x saja
  """
  
  
# Continue 
angka = 1
while angka <= 5:
  if angka == 5 :# yang angka 5 akan hilang
    angka += 1
    continue
  print("Ini Hari Ke-",angka)
  angka += 1
else:
  print("ini adalah yg terakhir",angka)
print() 


# Pass 
angka = 1
while angka <= 5:
  if angka == 4 :
    angka += 1
    pass
  print("Ini Hari Ke-",angka)
  angka += 1
else:
  print("ini adalah yg terakhir",angka)
  


  
























