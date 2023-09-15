document.getElementById('verificarBoton').addEventListener('click', function() {
    var textarea = document.getElementById('textarea2').value;
    var divContenido = document.getElementById('divContenido');

    // Extraer la URL de la imagen del código HTML ingresado
    var matches = textarea.match(/src=["'](.*?)["']/);
    if (matches && matches.length > 1) {
        var imageUrl = matches[1];
         // Guardar el valor del campo de texto en el almacenamiento local
         localStorage.setItem('textoGuardado', textarea);

        // Agregar la clase "imagen-cat" al divContenido antes de configurar la imagen de fondo
        divContenido.classList.add('imagen-cat');

        // Limpiar el contenido anterior del divContenido
        divContenido.innerHTML = '';

        // Crear elementos HTML para el h1, la imagen y el p
        var h1 = document.createElement('h1');
        h1.textContent = 'Foto de gatito';

        var img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Imagen de gatito';

        var p = document.createElement('p');
        p.textContent = 'Imagen de gatito';

        // Agregar los elementos creados al divContenido en el orden deseado
        divContenido.appendChild(h1);
        divContenido.appendChild(img);
        divContenido.appendChild(p);
    } else {
        // Mostrar un mensaje de error si no se encuentra una URL válida en el código HTML
        divContenido.style.backgroundImage = '';
        divContenido.classList.remove('imagen-cat'); // Remueve la clase si no se encontró una URL válida
        alert('No se encontró una URL de imagen válida en el código HTML ingresado.');
    }
});


// Al cargar la página, intenta recuperar el valor del campo de texto desde el almacenamiento local
window.onload = function() {
    var textoGuardado = localStorage.getItem('textoGuardado');
    if (textoGuardado) {
        document.getElementById('textarea2').value = textoGuardado;
    }
};


