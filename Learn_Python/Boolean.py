# OPERASI LOGIKA ATAU BOOLEAN

# NOT , OR, AND , XOR
# True = 1
# False = 0

# NOT
print("\n========== NOT ===========")
a = True
b = not a

print("nilai a :",a)
print("nilai b : Not a, maka b :",b)

# OR (Penjumlahan)
print("\n=========== OR ===========")

a = True
b = True
c = a or b
print(a," or", b," =",c)

a = True
b = False
c = a or b
print(a," or", b,"=",c)

a = False
b = True
c = a or b
print(a,"or",b," =",c)

a = False
b = False
c = a or b
print(a,"or",b,"=",c)


# AND (Perkalian)
print("\n========== AND ===========")

a = True
b = True
c = a and b
print(a," and", b," =",c)

a = True
b = False
c = a and b
print(a," and", b,"=",c)

a = False
b = True
c = a and b
print(a,"and",b," =",c)

a = False
b = False
c = a and b
print(a,"and",b,"=",c)


# XOR (Berbeda tapi tetap satu)
print("\n========== XOR ===========")

a = True
b = True
c = a ^ b
print(a," ^", b," =",c)

a = True
b = False
c = a ^ b
print(a," ^", b,"=",c)

a = False
b = True
c = a ^ b
print(a,"^",b," =",c)

a = False
b = False
c = a ^ b
print(a,"^",b,"=",c)