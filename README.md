# Encriptador de Texto

![Logo del Proyecto](assets/Logo-1.png)

Este proyecto es una aplicación web para encriptar y desencriptar texto. La aplicación permite ingresar un texto, encriptarlo mediante un algoritmo simple, y luego desencriptarlo para recuperar el mensaje original. También cuenta con funciones para copiar y pegar texto.

## Características

- **Encriptar Texto:** Convierte las vocales en una secuencia de caracteres específicos (ej. "a" en "ai").
- **Desencriptar Texto:** Revierte la encriptación para obtener el texto original.
- **Copiar y Pegar:** Permite copiar el texto encriptado/desencriptado y pegarlo en el área de entrada.
- **Interfaz Responsable:** Adaptable a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **HTML5:** Estructura del contenido web.
- **CSS3:** Estilos y diseño visual.
- **JavaScript:** Funcionalidad interactiva para encriptar y desencriptar texto.

## Instalación y Uso

### Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge, etc.).
- Conexión a Internet para cargar las fuentes y otros recursos.

### Instrucciones

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/JCaceres-R/EncriptadorTexto.git
    ```

2. **Navega a la carpeta del proyecto:**

    ```bash
    cd EncriptadorTexto
    ```

3. **Abre el archivo `index.html` en tu navegador:**

    Puedes hacer doble clic en el archivo `index.html` o abrirlo desde el navegador.

4. **Usa la Aplicación:**

    - **Ingrese el texto:** Escribe el texto que deseas encriptar en el área de texto.
    - **Encripta:** Haz clic en "Encriptar" para convertir el texto.
    - **Desencripta:** Haz clic en "Desencriptar" para revertir el proceso.
    - **Copia y pega:** Usa los botones correspondientes para copiar y pegar texto.

## Funcionalidades del Código

### JavaScript (app.js)

- **Restricciones de Entrada:** Se asegura de que solo se ingresen letras minúsculas y espacios.
- **Funciones de Encriptado/Desencriptado:** Implementación de un sencillo algoritmo de sustitución de caracteres.
- **Manipulación del Portapapeles:** Permite copiar el texto procesado y pegar texto desde el portapapeles.
  
```javascript
document.getElementById('textoingreso').addEventListener('input', function (e) {
    const invalidChars = /[^a-z\s]/g;

    if (invalidChars.test(e.target.value)) {
        alert("Por favor, solo escribe letras minúsculas y espacios.");
        e.target.value = e.target.value.replace(invalidChars, '');
    }
});
