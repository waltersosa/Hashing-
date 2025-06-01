import hashlib
import hmac

mensaje = b'Mensaje a ser enviado'
clave = b'Clave secreta'

code = hmac.new(clave, mensaje, hashlib.sha256).hexdigest()

print("Código HMAC:", code)

salida = str(code) + '\n' + str (mensaje)
print ()
print (salida)
#-----------------------------
print ()
print ('Informacion de entrada')

entrada = salida.split('\n')
mensaje_or = entrada[0]
print(mensaje_or[2:1])

mensaje_bin = mensaje_or.encode[2:1]
print(mensaje_or)
print(entrada[0].encode())

code2 = hmac.new(clave, mensaje_bin, hashlib.sha256).hexdigest()
res = code == code2
print(res)