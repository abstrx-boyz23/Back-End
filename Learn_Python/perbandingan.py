print("\n●●●●●●●●●●~START~●●●●●●●●●●●\n")

a = int(input("Masukan nilai a : "))
print()
b = int(input("Masukan nilai b : "))
print()
c = int(input("Masukan nilai c : "))
print()
d = int(input("Masukan nilai d : "))

print()	

lebih = a>0
lebih1 = c>8
kurang = b<5
kurang1= d<11
	
print (a,"> 0 =", lebih)
print (b,"< 5 =", kurang)
print (c,"> 8 =", lebih1)
print (d,"< 11 =", kurang1)
	
# Nilai AND 

print("\n======AND======\n")
	
antara = 0<a<5,8<b<11
antara1 = 0<c<5,8<d<11
koreksi = antara and antara1
	
print("0 <", a,"< 5","=== 8 <", b,"< 11", antara)
print("0 <", c,"< 5","=== 8 <", d,"< 11", antara1)
print("Maka Jawabannya adalah", koreksi)
	
# Nilai OR
	
print("\n======OR=======\n")
	
masing = 0>a, 5<b<8
masing1 = 0>c, 5<d<8
koreksi1  = masing or masing1

print ("0 >", a,"== 5 <", b,"< 8", masing)
print ("0 >", c,"=== 5 <", d,"< 8", masing1)
print("Maka Jawabannya Adalah", koreksi1 )
print()
print("abstrx_boyz\n")














