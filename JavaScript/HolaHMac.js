const crypto = require('crypto');

const mensaje = 'Mensaje a ser enviado';
const clave = 'Clave secreta';

// Crear HMAC
const hmac = crypto.createHmac('sha256', clave);
hmac.update(mensaje);
const code = hmac.digest('hex');

console.log('Código HMAC:', code);

// Concatenar la salida
const salida = code + '\n' + mensaje;
console.log('\n' + salida);

// -----------------------------
console.log('\nInformación de entrada');

const entrada = salida.split('\n');
const mensaje_or = entrada[1]; // El mensaje original está en la segunda línea
console.log(mensaje_or);

// Volver a calcular el HMAC con el mensaje recuperado
const hmac2 = crypto.createHmac('sha256', clave);
hmac2.update(mensaje_or);
const code2 = hmac2.digest('hex');

const res = code === code2;
console.log('¿Coinciden los códigos HMAC?', res);
