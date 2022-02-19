# Program python untuk menentukan bilangan prima atau tidak

# Meminta input bilangan dari user
a = int(input("Masukkan bilangan: "))
# bilangan prima harus lebih besar dari 1
if a > 1:
    for b in range(2,a):
        if a % b == 0:
            print(a,"bukan bilangan prima")
            break
    else:
        print(a,"adalah bilangan prima")
# bila bilangan kurang atau sama dengan satu
else:
    print(a, "bukan bilangan prima")