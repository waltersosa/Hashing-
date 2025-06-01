const crypto = require('crypto');
const fs = require('fs');

// Función para generar HMAC
function generarHMAC(mensaje, clave) {
    const hmac = crypto.createHmac('sha256', clave);
    hmac.update(mensaje);
    return hmac.digest('hex');
}

// Mensaje y clave
const mensaje = 'Santiago secreto';
const clave = 'sosamejia';

// Generar HMAC
const hmac = generarHMAC(mensaje, clave);

// Crear objeto con el mensaje y su HMAC
const mensajeCompleto = {
    mensaje: mensaje,
    hmac: hmac,
    timestamp: new Date().toISOString()
};

// Guardar en archivo
fs.writeFileSync('mensaje.txt', JSON.stringify(mensajeCompleto, null, 2));

console.log('Mensaje generado y guardado en mensaje.txt');
console.log('Contenido del mensaje:');
console.log(JSON.stringify(mensajeCompleto, null, 2)); 