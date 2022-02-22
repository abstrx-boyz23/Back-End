# OPERASI KOMPARASI

a = 2

# Lebih Dari (>)
hasil = a>3
print(a,"> 3  =",hasil)

# Kurang Dari (<)
hasil = a<3
print(a,"< 3  =",hasil)

# Lebih Dari Sama Dengan (>=)
hasil = a>=1
print(a,">= 1 =",hasil)

# Kurang Dari Sama Dengan (<=)
hasil = a<= 6
print(a,"<= 6 =",hasil)

# Sama Dengan (==)
hasil = a == 2
print(a,"== 2 =",hasil)

# Tidak Sama Dengan (!=)
hasil = a != 9
print(a,"!= 9 =",hasil)
print()

# "is" sebagai komparasi identity
x = 5 # ~> assigment membuat object
y = 5

print("nilai :",x,", ID =",hex(id(x)))
print("nilai :",y,", ID :",hex(id(y)))

hasil = x is y
print(x,"is",y,"=",hasil)
print()

# "is not" sebagai komparasi identity
x = 7
y = 4

print("nilai :",x,", ID :",hex(id(x)))
print("nilai :",y,", ID :",hex(id(y)))

hasil = x is not y
print(x,"is not",y,"=",hasil)
print()







