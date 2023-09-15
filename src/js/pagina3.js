

// Agregar un evento al botón "Verificar"
document.getElementById('verificarBoton').addEventListener('click', function() {
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
        document.getElementById('verificarBoton').setAttribute('disabled', 'true');
    } else {
        // Si no existe, mostrar mensaje de error
        errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';
    }
});

function redireccionarAPaginaSiguiente() {
    window.location.href = '../src/pages/pagina4.html'; // Cambia el nombre del archivo según tu necesidad
  }
  
  // Agregar un evento de clic al botón "siguiente"
  document.getElementById('siguiente').addEventListener('click', redireccionarAPaginaSiguiente);
  
  