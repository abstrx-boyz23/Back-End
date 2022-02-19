"""
Cara Menggunakan String :
1.• memakai single quote ('..')
  • memakai double quote ("..")
"""

# Exemple
print('pakai single quote')
print('pakai double quote')

# 2. menggunakan tanda (\)

# a. membuat tanda (') menjadi string
print('\nselamat hari jum\'at') 
	# ditambah {\}

# b. Backlash
print ("\nhttps:\\\coding.com")
	# backlash {\} di double

# c. Tab
print("Manusia\tSerakah")

# d. BackSpace
print("Kamu\bBego")

# e. New Line
print("Jamanul anak\nbaik") # LF
print("Jamanul anak\rbaik") # CR
print("Jamanul anak\r\nbaik") # LFCR
"""
LF = Line Feed
CR = Carriage Return
LFCR = Line Feed Carriage Return"""

# 3. String literal atau RAW

# Salah
print("C:\new folder") # Wrong

# menggunakan raw String
print(r"C:\new folder")

# Multiline Literal String
print("""
Jamanul anak yang baik
Dia sangat Friendly
Hobinya bermain game di ponsel
""")

# Colab (Raw dan Multiline Literal )
print(r"""
Jamanul hebat
dia belajar di www.https\\coding.com
Mantap :v
""")















