const crypto = require('crypto');
const fs = require('fs');

// Función para generar HMAC (igual que en generarMensaje.js)
function generarHMAC(mensaje, clave) {
    const hmac = crypto.createHmac('sha256', clave);
    hmac.update(mensaje);
    return hmac.digest('hex');
}

// Leer el mensaje del archivo
const mensajeCompleto = JSON.parse(fs.readFileSync('mensaje.txt', 'utf8'));

// Clave compartida (en un caso real, esta clave vendría de una fuente segura)
const clave = 'sosamejia';

// Verificar el HMAC
const hmacCalculado = generarHMAC(mensajeCompleto.mensaje, clave);
const hmacValido = hmacCalculado === mensajeCompleto.hmac;

console.log('=== Verificación de Mensaje ===');
console.log('Mensaje recibido:', mensajeCompleto.mensaje);
console.log('HMAC recibido:', mensajeCompleto.hmac);
console.log('HMAC calculado:', hmacCalculado);
console.log('Timestamp:', mensajeCompleto.timestamp);
console.log('¿El mensaje es válido?', hmacValido ? 'SÍ' : 'NO');

if (!hmacValido) {
    console.log('¡ADVERTENCIA! El mensaje podría haber sido modificado.');
} 