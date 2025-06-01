salida = "Hola"
key = "Chao"

bsalida = int.from_bytes(salida.encode(), 'big')
bkey = int.from_bytes(key.encode(), 'big')

print (bsalida)
print (bkey)

print (f"Salida: {bsalida}")
print (f"Clave: {bkey}")

code = bsalida ^ bkey

print (f"Codigo: {code}")


print ("***********Reverso**********")
entrada = code
key_r = "S"

bkey_r = ord(key_r)

mensaje = entrada ^ bkey_r

print(salida)


suma = 'a'  * 3
print (suma)