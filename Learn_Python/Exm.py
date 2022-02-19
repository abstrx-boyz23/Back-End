## BAB 5 MATERI INVINITY LOOPING 

# FOR # (Pengulangan)

a = 1,2,3,4,5
for a in 1,2,3,4,5:
	print(a)
print()

# Contoh Lain FOR #

a = ('Jayen')
for a in ('Jayen'):
	print(a,'tol')
print()

# RANGE # (Penulisan angka)

''' ## (start, stop, step) ##

jika step = (+) ~~> maka akan 
(berjalan maju) dan (stop-1)

jika step = (-) ~~> maka akan 
(berjalan mundur) dan (stop+1)
 
'''

print("==== kasus -1 ====\n")
# KASUS -1
a = range(1,11)
print (list(a))
''' jika start lebih kecil dr stop dan step tidak ada, maka hasil normal '''
print()

# KASUS -2
print("==== kasus -2 ====\n")
a = range (0,11,2)
b = range (0,11,3)
print (list(a))
print (list(b))
''' jika start < stop dan step < stop, maka hasil normal (urut dan    st-1)'''
print()

# KASUS -3
print("==== kasus -3 ====\n")
a = range (0,11,12)
print (list(a))
''' jika step > stop , maka hasil hanya start yg paling awal '''
print()

# KASUS -4
print("==== kasus -4 ====\n")
a = range (11,0)
print (list(a))
''' jika start > stop , maka hasil list akan kosong '''
print()

# KASUS -5
print("==== kasus -5 ====\n")
a = range (11,0,2)
print (list(a))
''' jika start > stop dan walaupun terdapat step, maka hasil list akan kosong '''
print()

# KASUS -6
print("==== kasus -6 ====\n")
a = range (10,0,-1)
print (list(a))
''' jika start > stop dan step = (-), maka hasil list akan ditulis mundur '''
print()

# KASUS -7
print("==== kasus -7 ====\n")
a = range (10,0,-11)
print (list(a))
''' jika start > stop lalu step = (-), dan (start + step) = (-) maka hasil hanya start plg awal '''
print()

# KASUS -8
print("==== kasus -8 ====\n")
print ('Intinya jika step = 0, maka hasil akan eror')
'''
a = range (0,11,0)
print (list(a))
'''
print()

## Gabungan FOR dan RANGE ##

print("==== FOR dan RANGE ====\n")
for a in range(1,6):
	print(a,'adalah angka\n')

## Contoh lain FOR dan RANGE ##

# Untuk Mencari Bilangan Prima

a = int(input('Masukan Nilai Yg Di Inginkan : '))
for a in range(1,a+1):
	x = 0
	
	for b in range(1,a+1):
		nilai = a % b
		if nilai == 0 :
			x = x + 1
	print
			
	if x == 2 :
		print(a,'adalah bilangan prima')
	else:
		print(b,'bukan bilangn prima')












































