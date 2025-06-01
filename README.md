# Proyecto de Criptografía: Hashing & Access Authentication Code

Este proyecto contiene los avances realizados en clase sobre Hashing y Access Authentication Code (HMAC), implementados en Python, junto con una tarea para el hogar en JavaScript.

## Objetivos del Proyecto
- Aplicar funciones criptográficas básicas en JavaScript
- Simular el comportamiento de un MAC (Message Authentication Code)
- Explorar el uso de JavaScript para seguridad en mensajes

## Actividad de JavaScript (Tarea)
### Instrucciones
1. **Obtención de Hash**
   - Implementar la generación de hash de una cadena de texto usando JavaScript
   - Utilizar SHA-256 mediante `crypto.subtle.digest` o la librería `crypto` de Node.js
   - Mostrar en consola tanto el texto original como el hash resultante
   - Código debe estar comentado y estructurado claramente

2. **Simulación de MAC (Message Authentication Code)**
   - Simular el intercambio de mensajes mediante archivos locales
   - Cada mensaje debe contener:
     - Texto original
     - Hash/HMAC correspondiente
     - Clave secreta (simulada)
   - Incluir explicación del proceso y contenido

## Estructura del Proyecto

### Implementaciones en Python (Clase)
- `Python/Hola.py`: Implementación básica de Python
- `Python/HolaHMac.py`: Implementación de HMAC (Hash-based Message Authentication Code) usando SHA-256
- `Python/Simetrico/`: Directorio que contiene implementaciones de cifrado simétrico

### Implementaciones en JavaScript (Tarea)
- `JavaScript/HolaHMac.js`: Implementación de HMAC en JavaScript como tarea para el hogar

## Descripción de los Componentes

### HMAC en Python
El archivo `HolaHMac.py` demuestra:
- Generación de códigos HMAC usando SHA-256
- Manejo de mensajes y claves secretas
- Verificación de códigos HMAC
- Procesamiento de mensajes en formato binario

### Entorno de Desarrollo
El proyecto utiliza un entorno virtual de Python para gestionar las dependencias, ubicado en el directorio `Cifrado/`.

#### Activación del Entorno Virtual
Antes de ejecutar cualquier archivo Python, es necesario activar el entorno virtual:

En Windows (PowerShell):
```powershell
cd Cifrado
.\Scripts\Activate.ps1
```

En Windows (Command Prompt):
```cmd
cd Cifrado
.\Scripts\activate.ps1
```

En Linux/Mac:
```bash
cd Cifrado
source Scripts/activate
```

Una vez activado el entorno virtual, podrás ejecutar los archivos Python desde cualquier directorio del proyecto.

## Requisitos
- Python 3.x
- Node.js (para las implementaciones en JavaScript)

## Uso
Para ejecutar los ejemplos en Python (después de activar el entorno virtual):
```bash
python Python/HolaHMac.py
```

Para ejecutar la implementación en JavaScript:
```bash
node JavaScript/HolaHMac.js
``` 