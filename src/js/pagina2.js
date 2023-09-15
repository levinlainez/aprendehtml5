
// Agregar un evento al botón "Verificar"
document.getElementById('verificarBoton').addEventListener('click', function() {
    var textareaContent = document.getElementById('textarea2').value.trim();
    var divContenido = document.getElementById('divContenido');
    var errorMensaje = document.getElementById('errorMensaje');
    // Obtener el elemento <textarea> por su ID
    divContenido.innerHTML = '';
    

    
    // Verificar si el contenido del textarea contiene <h2>¡Programar no es fácil, pero tampoco es imposible!</h2>
    if (textareaContent.includes('<h2>Tecnico en informatica</h2>')) {
        // Si existe, agregar el contenido al div, manteniendo el contenido anterior
        /// Limpia el contenido del div
        
        divContenido.innerHTML += textareaContent;
        // Limpiar el mensaje de error si estaba mostrándose
        errorMensaje.textContent = '';
        // Deshabilitar el botón "Verificar"
        document.getElementById('verificarBoton').setAttribute('disabled', 'true');
        document.getElementById('siguiente').removeAttribute('disabled');
    } else {
        // Si no existe, mostrar mensaje de error
        errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';
    }
});

function redireccionarAPaginaSiguiente() {
    window.location.href = '../pages/pagina3.html'; // Cambia el nombre del archivo según tu necesidad
  }
  
  // Agregar un evento de clic al botón "siguiente"
  document.getElementById('siguiente').addEventListener('click', redireccionarAPaginaSiguiente);
  
  