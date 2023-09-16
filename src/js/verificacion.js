// verificacion.js
export function verificarContenido() {
    const textareaContent = document.getElementById('textarea2').value.trim();
    const divContenido = document.getElementById('divContenido');
    const errorMensaje = document.getElementById('errorMensaje');
    
    // Lógica de verificación aquí
    if (textareaContent.includes('<h1>Curso de HTML5</h1>')) {
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
      document.getElementById('siguiente3').setAttribute('disabled');
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

    // Verificar si el contenido del textarea contiene tanto <main> como </main>
    if (textareaContent.includes('<main>') && textareaContent.includes('</main>')) {
        // Agregar el contenido al div
        divContenido.innerHTML = textareaContent;
        document.getElementById('verificarBoton4').setAttribute('disabled', 'true');
        document.getElementById('siguiente4').removeAttribute('disabled');
    } else {
        // Mostrar un mensaje de error si falta <main> o </main>
        errorMensaje.textContent = 'El contenido debe contener tanto la etiqueta <main> como </main>.';
    }
}

export function verificarContenido5() {
  const textareaContent = document.getElementById('textarea2').value;
  const divContenido = document.getElementById('divContenido');
  const errorMensaje = document.getElementById('errorMensaje');

  // Extraer la URL de la imagen del código HTML ingresado
  const matches = textareaContent.match(/src=["'](.*?)["']/);
  if (matches && matches.length > 1) {
      const imageUrl = matches[1];

      // Guardar el valor del campo de texto en el almacenamiento local
      //localStorage.setItem('textoGuardado', textareaContent);

      // Agregar la clase "imagen-cat" al divContenido antes de configurar la imagen de fondo
      divContenido.classList.add('imagen-cat');

      // Limpiar el contenido anterior del divContenido
      divContenido.innerHTML = '';
      errorMensaje.textContent = '';

      // Crear elementos HTML para el h1, la imagen y el p
      const h1 = document.createElement('h1');
      h1.textContent = 'Curso de HTML5';

      const p = document.createElement('p');
      p.textContent = 'Imagen de gatito';

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Imagen de gatito';

      // Agregar los elementos creados al divContenido en el orden deseado
      divContenido.appendChild(h1);
      divContenido.appendChild(p);
      divContenido.appendChild(img);
      document.getElementById('verificarBoton5').setAttribute('disabled', 'true');
      document.getElementById('siguiente5').removeAttribute('disabled');
  } else {
      // Mostrar un mensaje de error si no se encuentra una URL válida en el código HTML
      divContenido.style.backgroundImage = '';
      divContenido.classList.remove('imagen-cat'); // Remueve la clase si no se encontró una URL válida
       // Mostrar un mensaje de error si falta <main> o </main>
       errorMensaje.textContent = 'No se encontro una imagen.';
      
  }
}

export function verificarContenido6() {
  const textareaContent = document.getElementById('textarea2').value;
  const divContenido = document.getElementById('divContenido');
  const errorMensaje = document.getElementById('errorMensaje');

  // Extraer la URL de la imagen del código HTML ingresado
  const matches = textareaContent.match(/src=["'](.*?)["']/);
  if (matches && matches.length > 1) {
      const imageUrl = matches[1];

      // Buscar la cadena 'alt="Es un gatito"' en el contenido del textarea
      if (textareaContent.includes('alt="Es un gatito"')) {
          // Si se encuentra la cadena, continuar con la lógica
          divContenido.classList.add('imagen-cat');
          divContenido.innerHTML = '';
          errorMensaje.textContent = '';

          // Crear elementos HTML para el h1, la imagen y el p
          const h1 = document.createElement('h1');
          h1.textContent = 'Curso de HTML5';

          const p = document.createElement('p');
          p.textContent = 'Imagen de gatito';

          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Es un gatito';

          // Agregar los elementos creados al divContenido en el orden deseado
          divContenido.appendChild(h1);
          divContenido.appendChild(p);
          divContenido.appendChild(img);
          document.getElementById('verificarBoton5').setAttribute('disabled', 'true');
          document.getElementById('siguiente5').removeAttribute('disabled');
      } else {
          // Si no se encuentra la cadena 'alt="Es un gatito"', mostrar un mensaje de error
          divContenido.style.backgroundImage = '';
          divContenido.classList.remove('imagen-cat');
          errorMensaje.textContent = 'El atributo alt debe ser "Es un gatito".';
      }
  } else {
      // Mostrar un mensaje de error si no se encuentra una URL válida en el código HTML
      divContenido.style.backgroundImage = '';
      divContenido.classList.remove('imagen-cat');
      errorMensaje.textContent = 'No se encontró una URL de imagen válida en el código HTML ingresado.';
  }
}








