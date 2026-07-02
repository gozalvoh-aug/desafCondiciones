# desafCondiciones

Proyecto de práctica en HTML, CSS y JavaScript enfocado en el uso de **estructuras condicionales** (`if / else if / else`). Contiene 3 ejercicios independientes dentro de una misma página.

## Demo

Abrir `index.html` en el navegador para ver los 3 ejercicios funcionando.

## Ejercicios

### 1. Borde condicional al hacer click en una imagen
Al hacer click sobre la imagen, se activa o desactiva un borde rojo usando una variable "bandera" (`bordeActivo`) que alterna entre `true` y `false` en cada click.

- **Archivo:** `assets/js/script.js` (sección *Prueba 1*)
- **Lógica:** `if (bordeActivo === false) { agregar borde } else { quitar borde }`

### 2. Pedido de stickers
Permite elegir la cantidad de 3 tipos de stickers (mínimo 0 cada uno). Se calcula el total y se valida que no supere las 10 unidades.

- **Archivo:** `assets/js/script.js` (sección *Prueba 2*)
- **Lógica:**
  - Si el total es **≤ 10** → se muestra "Llevas X stickers"
  - Si el total es **> 10** → se muestra "Llevas demasiados stickers" (en rojo)

### 3. Verificación de password con selects
Tres `<select>` con dígitos del 1 al 9 se combinan para formar un password de 3 dígitos. Al presionar **Ingresar**, se valida contra dos combinaciones válidas.

- **Archivo:** `assets/js/script.js` (sección *Prueba 3*)
- **Lógica:**
  - `911` → "Password 1 correcta ✔"
  - `714` → "Password 2 es correcta ✔"
  - Cualquier otro valor → "Password incorrecta ❌"

## Estructura del proyecto

```
desafCondiciones-main/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       ├── descarga2.png
│       ├── git.jpeg
│       ├── pulpos.jpeg
│       └── slack.png
└── README.md
```

## Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla, sin librerías ni frameworks)

## Cómo usarlo

1. Clonar o descargar el repositorio.
2. Abrir `index.html` directamente en cualquier navegador (no requiere servidor ni instalación de dependencias).
