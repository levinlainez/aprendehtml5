document.getElementById('verificarBoton').addEventListener('click', function() {
  var textareaContent = document.getElementById('textarea2').value.trim();
  var divContenido = document.getElementById('divContenido');
  var errorMensaje = document.getElementById('errorMensaje');
  
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

function redireccionarAPaginaSiguiente() {
  window.location.href = '../src/pages/pagina2.html'; // Cambia el nombre del archivo según tu necesidad
}

// Agregar un evento de clic al botón "siguiente"
document.getElementById('siguiente').addEventListener('click', redireccionarAPaginaSiguiente);



