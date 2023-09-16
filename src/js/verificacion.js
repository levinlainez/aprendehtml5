// verificacion.js
export function verificarContenido() {
    const textareaContent = document.getElementById('textarea2').value.trim();
    const divContenido = document.getElementById('divContenido');
    const errorMensaje = document.getElementById('errorMensaje');
    
    // Lógica de verificación aquí
    if (textareaContent.includes('<h1>Bienvenido a la clase de HTML5</h1>')) {
      // Si existe, agregar el contenido al div
      divContenido.innerHTML = textareaContent;
      // Limpiar el mensaje de error si estaba mostrándose
      errorMensaje.textContent = '';
      // Deshabilitar el botón "Verificar"
      document.getElementById('verificarBoton').setAttribute('disabled', 'true');
      // Habilitar el botón "Siguiente"
      document.getElementById('siguiente').removeAttribute('disabled');
    } else {
      // Si no existe, mostrar mensaje de error
      errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';
      // Limpiar el contenido del div
      divContenido.innerHTML = '';
    }
  }
 
  // verificacion.js
export function verificarContenido2() {
    const textareaContent = document.getElementById('textarea2').value.trim();
    const divContenido = document.getElementById('divContenido');
    const errorMensaje = document.getElementById('errorMensaje');
    
    divContenido.innerHTML = '';
    // Verificar si el contenido del textarea contiene <h2>Tecnico en informatica</h2>
    if (textareaContent.includes('<h2>Tecnico en informatica</h2>')) {
      // Si existe, agregar el contenido al div, manteniendo el contenido anterior
      divContenido.innerHTML += textareaContent;
      // Limpiar el mensaje de error si estaba mostrándose
      errorMensaje.textContent = '';
      // Deshabilitar el botón "Verificar"
      document.getElementById('verificarBoton2').setAttribute('disabled', 'true');
      // Habilitar el botón "Siguiente"
      document.getElementById('siguiente2').removeAttribute('disabled');
    } else {
      // Si no existe, mostrar mensaje de error
      errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';
    }
  }
  

// verificacion.js
export function verificarContenido3() {
    const textareaContent = document.getElementById('textarea2').value.trim();
    const divContenido = document.getElementById('divContenido');
    const errorMensaje = document.getElementById('errorMensaje');
    divContenido.innerHTML = '';
  
    // Verificar si el contenido del textarea contiene <p>!Programar no es facil, pero tampoco imposible¡</p>
    if (textareaContent.includes('<p>!Programar no es facil, pero tampoco imposible¡</p>')) {
      // Si existe, agregar el contenido al div, manteniendo el contenido anterior
      divContenido.innerHTML += textareaContent;
      // Limpiar el mensaje de error si estaba mostrándose
      errorMensaje.textContent = '';
      // Deshabilitar el botón "Verificar"
      document.getElementById('verificarBoton3').setAttribute('disabled', 'true');
      document.getElementById('siguiente3').setAttribute('disabled', 'true');
    } else {
      // Si no existe, mostrar mensaje de error
      errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';
    }
  }
  
  export function verificarContenido4() {
    const textareaContent = document.getElementById('textarea2').value;
    const divContenido = document.getElementById('divContenido');
    const errorMensaje = document.getElementById('errorMensaje');

    // Limpiar contenido actual del div y el mensaje de error
    divContenido.innerHTML = '';
    errorMensaje.textContent = '';

    // Verificar si el contenido del textarea contiene <main>
    if (textareaContent.includes('<main>')) {
        // Agregar el contenido al div
        divContenido.innerHTML = textareaContent;
    } else {
        // Mostrar un mensaje de error si falta <main>
        errorMensaje.textContent = 'El contenido debe contener la etiqueta <main>.';
    }
}




