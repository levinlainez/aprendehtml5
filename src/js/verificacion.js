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
    // Agregar la clase 'nav-item-red' al elemento de navegación
    // Guardar el estado en localStorage
    
    localStorage.setItem('navItemRed1', 'true');
  } else {
    
    errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';
    // Limpiar el contenido del div
    divContenido.innerHTML = '';

    // Eliminar el estado de localStorage
    localStorage.removeItem('navItemRed1'); // Debes usar la misma clave que usaste para guardar
  }
}


 
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
    

    // Guardar el estado en localStorage
    localStorage.setItem('navItemRed2', 'true');
  } else {
    
    // Si no existe, mostrar mensaje de error
    errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';

    // Eliminar el estado de localStorage
    localStorage.removeItem('navItemRed2');
  }
}

  

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

      

      // Guardar el estado en localStorage
      localStorage.setItem('navItemRed3', 'true');
  } else {
      
      // Si no existe, mostrar mensaje de error
      errorMensaje.textContent = 'Lo siento, Tu código no cumple los requisitos.';

      // Eliminar el estado de localStorage
      localStorage.removeItem('navItemRed3');
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
        // Agregar la clase 'nav-item-red' al elemento de navegación
        const navItem = document.querySelector('.page-item a[href="pagina4.html"]');
        navItem.classList.add('nav-item-red');
        // Guardar el estado en localStorage
        localStorage.setItem('navItemRed4', 'true');
    } else {
        
        // Eliminar el estado de localStorage
        localStorage.removeItem('navItemRed4');
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
      h1.textContent = 'Bienvenido a la clase de HTML5';

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
      
        // Guardar el estado en localStorage
      localStorage.setItem('navItemRed5', 'true');
  } else {
      
      // Eliminar el estado de localStorage
      localStorage.removeItem('navItemRed5');
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
          document.getElementById('verificarBoton6').setAttribute('disabled', 'true');
          document.getElementById('siguiente6').removeAttribute('disabled');
          
            // Guardar el estado en localStorage
          localStorage.setItem('navItemRed6', 'true');
      } else {
          // Si no se encuentra la cadena 'alt="Es un gatito"', mostrar un mensaje de error
          
          errorMensaje.textContent = 'El atributo alt debe ser "Es un gatito".';
          
          // Eliminar el estado de localStorage
          localStorage.removeItem('navItemRed6');
      }
  } else {
      // Mostrar un mensaje de error si no se encuentra una URL válida en el código HTML
      
      errorMensaje.textContent = 'No se encontró una URL de imagen válida en el código HTML ingresado.';
  }
}

export function verificarContenido7() {
  const textareaContent = document.getElementById('textarea2').value;
  const divContenido = document.getElementById('divContenido');
  const errorMensaje = document.getElementById('errorMensaje');

  // Extraer la URL de la imagen del código HTML ingresado
  const matches = textareaContent.match(/src=["'](.*?)["']/);
  if (matches && matches.length > 1) {
      const imageUrl = matches[1];

      // Buscar la cadena 'alt="Es un gatito"' en el contenido del textarea
      if (textareaContent.includes('<a href="https://www.mundogatos.com/">Galeria de Gatitos</a>')) {
          // Si se encuentra la cadena, continuar con la lógica
          divContenido.classList.add('imagen-cat');
          divContenido.innerHTML = '';
          errorMensaje.textContent = '';

          // Crear elementos HTML para el h1, la imagen y el p
          const h1 = document.createElement('h1');
          h1.textContent = 'MiauMundo';
          const h2 = document.createElement('h2');
          h2.textContent = 'Foto de Gatitos';

          const p = document.createElement('p');
          p.textContent = 'Mira más fotos de gatos en nuestra galería.';

          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Es un gatito';

          const a = document.createElement('a');
          a.href = 'https://www.mundogatos.com/';
          a.textContent = 'Galeria de Gatitos';
          a.style.fontSize = '16px'; // Establecer el tamaño de fuente en 16px
          a.style.display = 'block'; // Forzar el enlace a ocupar toda una línea

          // Agregar los elementos creados al divContenido en el orden deseado
          divContenido.appendChild(h1);
          divContenido.appendChild(h2);
          divContenido.appendChild(p);
          divContenido.appendChild(img);
          divContenido.appendChild(a);
          
          document.getElementById('verificarBoton7').setAttribute('disabled', 'true');
          document.getElementById('siguiente7').removeAttribute('disabled');
          
            // Guardar el estado en localStorage
          localStorage.setItem('navItemRed7', 'true');
      } else {
          
          // Eliminar el estado de localStorage
          localStorage.removeItem('navItemRed7');
      
          errorMensaje.textContent = 'ELo siento, Tu código no cumple los requisitos.';
      }
  } else {
      // Mostrar un mensaje de error si no se encuentra una URL válida en el código HTML
      
      errorMensaje.textContent = 'No se encontró una URL de imagen válida en el código HTML ingresado.';
  }
}






