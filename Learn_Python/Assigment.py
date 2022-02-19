  #### PENDALAMAN MATERI ####

print("#============ ASSIGMENT ============#\n")

# PENJUMLAHAN

nilai_A = 12
nilai_A += 2 
""" 
nilai_A kan = 12

jadi, nilai_A += 2 
      nilai_A = nilai_A + 2
      nilai_A = 12 + 2
      nilai_A = 14
"""
print("nilai_A :",nilai_A)

# PENGURANGAM

nilai_b = 12
nilai_b -= 2 
""" 
nilai_b kan = 12

jadi, nilai_b -= 2 
      nilai_b = nilai_b - 2
      nilai_b = 12 - 2
      nilai_b = 10
"""
print("nilai_b :",nilai_b)

# PERKALIAN

nilai_c = 2
nilai_c *= 3

"""
nilai_c kan = 3

maka, nilai_c *= 3
      nilai_c = nilai_c * 3
      nilai_c = 2 * 3
      nilai_c = 6
"""
print("nilai_c :",nilai_c)

# PEMBAGIAN
nilai_d = 175
nilai_d /= nilai_d
print("nilai_d :",nilai_d)
print()

# Begitu juga dengan Eksponen, Floor Division, Modulus.

print("#============ BITWISE ==============#\n")

print("==== (|) ====")

umur_adit = 23
umur_afif = 12
umur_sandi = umur_adit|umur_afif
print("Biner dari 23 (umur_adit)   =",format(umur_adit,"08b"))
print("Biner dari 12 (umur_afif)   =",format(umur_afif,"08b"))
print("Maka Hasil dari umur_adit|umur_afif =",format(umur_sandi,"08b"))


print("\n==== (~) ====")
a = ~umur_adit
b = -umur_adit
print("Biner dari a (~umur_adit)   =",format(a,"08b"))
print("Biner dari a (-umur_adit)   =",format(b,"08b"))



print("\n#=========== MEMBERSHIP ==============#")
# Kalau in untuk tipe data list

print("\n==== (in) ====")

rukun_islam = ['Syahadat','Sholat','Puasa','Zakat','Haji bagi yg mampu']

print(rukun_islam,"\n")

print ("Apakah Sholat Termasuk Rukun_Islam =","Sholat" in rukun_islam)

print("\n==== (not in) ====")

print ("Apakah Jihad Tidak Termasuk Rukun_Islam =","Jihad" not in rukun_islam)



print("\n#=========== IDENTITY ==============#")
# Kalau Is untuk variabel dengan variabel

print("\n==== (is) ====")

a = 4
b = 4
c = a is b
print("Nilai a :",a)
print("Nilai b :",b)
print("Nilai a is b =",c)


print("\n==== (is not) ====")

a = 4
b = 6
c = a is not b
print("Nilai a :",a)
print("Nilai b :",b)
print("Nilai a is not b =",c)


# Prioritas Eksekusi

a = 2*4**(2+2)
print("2*4**(2+2) =",a)






















