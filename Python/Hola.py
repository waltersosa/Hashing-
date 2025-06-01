import hashlib

mensaje = "Hola, ¿cómo estás?"
mensaje_bytes = mensaje.encode()

print("Mensaje en bytes:", mensaje_bytes)

# Crear el hash SHA-256 del mensaje
hash_obj = hashlib.sha256(mensaje_bytes)
print("Objeto hash:", hash_obj)

# Convertir el hash a formato hexadecimal
hash_hex = hash_obj.hexdigest()
print("Hash SHA-256 en hexadecimal:", hash_hex)
