window.onload = function() {
    // Buscamos el div por su id
    var divContenido = document.getElementById("divContenido");

    // Cambiamos el contenido del div
    divContenido.textContent = "Bienvenido a la clase de HTML5";
};

// Agregar un evento al botón "Verificar"
document.getElementById('verificarBoton').addEventListener('click', function() {
    var textareaContent = document.getElementById('textarea2').value.trim();
    var divContenido = document.getElementById('divContenido');
    var errorMensaje = document.getElementById('errorMensaje');
    
    // Verificar si el contenido del textarea contiene <h2>¡Programar no es fácil, pero tampoco es imposible!</h2>
    if (textareaContent.includes('<h2>Tecnico en informatica</h2>')) {
        // Si existe, agregar el contenido al div, manteniendo el contenido anterior
        divContenido.innerHTML += textareaContent;
        // Limpiar el mensaje de error si estaba mostrándose
        errorMensaje.textContent = '';
        // Deshabilitar el botón "Verificar"
        document.getElementById('verificarBoton').setAttribute('disabled', 'true');
    } else {
        // Si no existe, mostrar mensaje de error
        errorMensaje.textContent = 'Error: El contenido no contiene <h2>Tecnico en informatica</h2>';
    }
});