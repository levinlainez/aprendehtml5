

// Verificar si el elemento con el ID 'verificarBoton' existe antes de agregar un evento
const verificarBoton = document.getElementById('verificarBoton');
    if (verificarBoton) {
      verificarBoton.addEventListener('click', function() {
        var textareaContent = document.getElementById('textarea2').value.trim();
        var divContenido = document.getElementById('divContenido');
        var errorMensaje = document.getElementById('errorMensaje');
        // Tu lógica de verificación aquí
        // Verificar si el contenido del textarea contiene <h1>Bienvenido a la clase de HTML5</h1>
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
  });
}



function redireccionarAPaginaDos() {
  window.location.href = '/src/pages/pagina2.html'; // Cambia el nombre del archivo según tu necesidad
}


// Verificar si el elemento con el ID 'siguiente' existe antes de agregar un evento
const siguienteBoton = document.getElementById('siguiente');
if (siguienteBoton) {
  siguienteBoton.addEventListener('click', redireccionarAPaginaDos);
}

// Verificar si el elemento con el ID 'verificarBoton2' existe antes de agregar un evento
const verificarBoton2 = document.getElementById('verificarBoton2');
if (verificarBoton2) {
  verificarBoton2.addEventListener('click', function() {
    // Tu otra lógica de verificación aquí
    var textareaContent = document.getElementById('textarea2').value.trim();
    var divContenido = document.getElementById('divContenido');
    var errorMensaje = document.getElementById('errorMensaje');
    
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
  });
}


function redireccionarAPaginaTres() {
  window.location.href = '/src/pages/pagina3.html'; // Cambia el nombre del archivo según tu necesidad
}

// Verificar si el elemento con el ID 'siguiente2' existe antes de agregar un evento
const siguiente2Boton = document.getElementById('siguiente2');
if (siguiente2Boton) {
  siguiente2Boton.addEventListener('click', redireccionarAPaginaTres);
}


const verificarBoton3 = document.getElementById('verificarBoton3');
    if (verificarBoton3) {
      verificarBoton3.addEventListener('click', function() {
        var textareaContent = document.getElementById('textarea2').value.trim();
        var divContenido = document.getElementById('divContenido');
        var errorMensaje = document.getElementById('errorMensaje');
        divContenido.innerHTML = '';
  
    // Verificar si el contenido del textarea contiene <h2>¡Programar no es fácil, pero tampoco es imposible!</h2>
    if (textareaContent.includes('<p>!Programar no es facil, pero tampoco imposible¡</p>')) {
        // Si existe, agregar el contenido al div, manteniendo el contenido anterior
        divContenido.innerHTML += textareaContent;
        // Limpiar el mensaje de error si estaba mostrándose
        errorMensaje.textContent = '';
        // Deshabilitar el botón "Verificar"
        document.getElementById('verificarBoto3').setAttribute('disabled', 'true');
        document.getElementById('siguiente').setAttribute('disabled');
    } else {
        // Si no existe, mostrar mensaje de error
        errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';
    }
  });
}


function redireccionarAPaginaCuatro() {
  window.location.href = '../src/pages/pagina4.html'; // Cambia el nombre del archivo según tu necesidad
}


const siguiente3Boton = document.getElementById('siguiente3');
if (siguiente3Boton) {
  siguiente3Boton.addEventListener('click', redireccionarAPaginaCuatro);
}
