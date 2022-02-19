# FORMAT STRING

# string
dia = 'Cantikk'
#sapaan = 'Halo ' + dia + ', apa kabar?'
sapaan = f"Halo {dia}, apa kabar??"
print(sapaan, '\n')


# float
a = 14.12
ttl = f'{a} adalah tanggal lahir gua.'
print(ttl,'\n')

# boolean
a = False
exp = f'2 * 2 = 4, hasil => {a}'
print(exp,'\n')

# angka ribuan, jutaan, miliar
a = 227382919
p = f"harganya = {a:,}"
print(p,'\n')

# angka desimal
a = 23738282948.84549292002
b = f'nilai desimal = {a:,.2f}'
print(b,'\n')

# leanding zero
a = 223.4565
b = f'nilai desimal = \n{a:012,.3f}'
print(b,'\n')


# contoh lain leanding zero
a = 223.4565
b = f'nilai desimal = \n{a:013,.3f}'
print(b,'\n')

''' Kesimpulan : jika ada (,)        {a:x,.yf}
    maka n/4 =0 hasilnya akan sama dengan n+1'''

# menampilkan tanda (+) dan (-)
a = +23
b = -12
plus = f'nilai plus = {a:+d}'
minus = f'nilai minus = {b:-d}'

print(plus,)
print(minus,'\n')

# format untuk persentase
a = 0.25
b = f'persentase = {a:.1%}'
print(b,'\n')

# melakukan operasi aritmatika
harga = 5000
apel = 5
total = f'total harga = {harga*apel}'
print(total,'\n')

# melakukan operasi lain(binary, octal, hexsadesimal)
nilai = 5268
binary = f'binary = {bin(nilai)}'
octal = f'octal = {oct(nilai)}'
heksa = f'heksa = {hex(nilai)}'

print(binary)
print(octal)
print(heksa,'\n')




a = 
