// verificacion.js
export function verificarContenido() {
  const textareaContent = document.getElementById('textareapage1').value.trim();
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
    localStorage.setItem('textpage1', textareaContent);

    Swal.fire({
      title: '¡Felicidades!',
      text: 'Felicidades, su código ha sido aprobado',
      icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Realizar acciones adicionales si es necesario
      }
    });
    
  } else {
    
    // Eliminar el estado de localStorage
    localStorage.removeItem('navItemRed1'); // Debes usar la misma clave que usaste para guardar
    localStorage.removeItem('textpage1');
    Swal.fire({
      title: 'Error!',
      text: 'Lo siento, Tu código no cumple los requisitos.',
      icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Realizar acciones adicionales si es necesario
      }
    });
  }
}


 
export function verificarContenido2() {
  const textareaContent = document.getElementById('textareapage2').value.trim();
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
    localStorage.setItem('textpage2', textareaContent);
    Swal.fire({
      title: '¡Felicidades!',
      text: 'Felicidades, su código ha sido aprobado',
      icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Realizar acciones adicionales si es necesario
      }
    });
    
  } else {
    // Eliminar el estado de localStorage
    localStorage.removeItem('navItemRed2');
    localStorage.removeItem('textpage2');

    Swal.fire({
      title: 'Error!',
      text: 'Lo siento, Tu código no cumple los requisitos.',
      icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Realizar acciones adicionales si es necesario
      }
    });
    
  }
}

  

export function verificarContenido3() {
  const textareaContent = document.getElementById('textareapage3').value.trim();
  const divContenido = document.getElementById('divContenido');
  const errorMensaje = document.getElementById('errorMensaje');
  divContenido.innerHTML = '';

  // Verificar si el contenido del textarea contiene <p>!Programar no es facil, pero tampoco imposible¡</p>
  if (textareaContent.includes('<p>!Programar no es facil, pero tampoco imposible¡</p>')) {
      // Si existe, agregar el contenido al div, manteniendo el contenido anterior
      divContenido.innerHTML += textareaContent;
      // Limpiar el mensaje de error si estaba mostrándose
      errorMensaje.textContent = '';
      

      

      // Guardar el estado en localStorage
      localStorage.setItem('navItemRed3', 'true');
      localStorage.setItem('textpage3', textareaContent);
      Swal.fire({
        title: '¡Felicidades!',
        text: 'Felicidades, su código ha sido aprobado',
        icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Realizar acciones adicionales si es necesario
        }
      });
  } else {
      
      

      // Eliminar el estado de localStorage
      localStorage.removeItem('navItemRed3');
      localStorage.removeItem('textpage3');

      Swal.fire({
        title: 'Error!',
        text: 'Lo siento, Tu código no cumple los requisitos.',
        icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Realizar acciones adicionales si es necesario
        }
      });
  }
}

  
  export function verificarContenido4() {
    const textareaContent = document.getElementById('textareapage4').value;
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
        
        // Guardar el estado en localStorage
        localStorage.setItem('navItemRed4', 'true');
        localStorage.setItem('textpage4', textareaContent);
        Swal.fire({
          title: '¡Felicidades!',
          text: 'Felicidades, su código ha sido aprobado',
          icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Realizar acciones adicionales si es necesario
          }
        });
    } else {
        
        // Eliminar el estado de localStorage
        localStorage.removeItem('navItemRed4');
        localStorage.removeItem('textpage4');
        Swal.fire({
          title: 'Error!',
          text: 'El contenido debe contener tanto la etiqueta <main> como </main>.',
          icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Realizar acciones adicionales si es necesario
          }
        });
        
    }
}

export function verificarContenido5() {
  const textareaContent = document.getElementById('textareapage5').value;
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
      
      
        // Guardar el estado en localStorage
      localStorage.setItem('navItemRed5', 'true');
      localStorage.setItem('textpage5', textareaContent);
      Swal.fire({
        title: '¡Felicidades!',
        text: 'Felicidades, su código ha sido aprobado',
        icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Realizar acciones adicionales si es necesario
        }
      });
  } else {
      
      // Eliminar el estado de localStorage
      localStorage.removeItem('navItemRed5');
      localStorage.removeItem('textpage5');
      // Mostrar un mensaje de error si no se encuentra una URL válida en el código HTML
      divContenido.style.backgroundImage = '';
      divContenido.classList.remove('imagen-cat'); // Remueve la clase si no se encontró una URL válida
       // Mostrar un mensaje de error si falta <main> o </main>
       

       Swal.fire({
        title: 'Error!',
        text: 'No se encontró una imagen válida',
        icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Realizar acciones adicionales si es necesario
        }
      });
      
  }
}

export function verificarContenido6() {
  const textareaContent = document.getElementById('textareapage6').value;
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
          
            // Guardar el estado en localStorage
          localStorage.setItem('navItemRed6', 'true');
          localStorage.setItem('textpage6', textareaContent);
          Swal.fire({
            title: '¡Felicidades!',
            text: 'Felicidades, su código ha sido aprobado',
            icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              // Realizar acciones adicionales si es necesario
            }
          });
      } else {
          // Si no se encuentra la cadena 'alt="Es un gatito"', mostrar un mensaje de error

          Swal.fire({
            title: 'Error!',
            text: 'El atributo alt debe ser "Es un gatito".',
            icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              // Realizar acciones adicionales si es necesario
            }
          });
          
          
          
          // Eliminar el estado de localStorage
          localStorage.removeItem('navItemRed6');
          localStorage.removeItem('textpage6');
      }
  } else {
      // Mostrar un mensaje de error si no se encuentra una URL válida en el código HTML
      
      Swal.fire({
        title: 'Error!',
        text: 'No se encontró una URL de imagen válida',
        icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Realizar acciones adicionales si es necesario
        }
      });
  }
}

export function verificarContenido7() {
  const textareaContent = document.getElementById('textareapage7').value;
  const divContenido = document.getElementById('divContenido');
  const errorMensaje = document.getElementById('errorMensaje');

  // Extraer la URL de la imagen del código HTML ingresado
  const matches = textareaContent.match(/src=["'](.*?)["']/);
  if (matches && matches.length > 1) {
      const imageUrl = matches[1];

      // Buscar la cadena 'alt="Es un gatito"' en el contenido del textarea
      if (textareaContent.includes('<a href="https://www.mundogatos.com/"></a>')) {
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

          
          // Agregar los elementos creados al divContenido en el orden deseado
          divContenido.appendChild(h1);
          divContenido.appendChild(h2);
          divContenido.appendChild(p);
          divContenido.appendChild(img);
          
          
            // Guardar el estado en localStorage
          localStorage.setItem('navItemRed7', 'true');
          localStorage.setItem('textpage7', textareaContent);
          Swal.fire({
            title: '¡Felicidades!',
            text: 'Felicidades, su código ha sido aprobado',
            icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              // Realizar acciones adicionales si es necesario
            }
          });
      } else {
          
          // Eliminar el estado de localStorage
          localStorage.removeItem('navItemRed7');
          localStorage.removeItem('textpage7');
      
          Swal.fire({
            title: 'Error!',
            text: 'Lo siento, Tu código no cumple los requisitos',
            icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              // Realizar acciones adicionales si es necesario
            }
          });
      }
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'No se encontró una URL de imagen válida',
      icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Realizar acciones adicionales si es necesario
      }
    });
  }
}

export function verificarContenido8() {
  const textareaContent = document.getElementById('textareapage8').value;
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
          
            // Guardar el estado en localStorage
          localStorage.setItem('navItemRed8', 'true');
          localStorage.setItem('textpage8', textareaContent);
          // Mostrar el cuadro de diálogo SweetAlert2
          Swal.fire({
            title: '¡Felicidades!',
            text: 'Felicidades, su código ha sido aprobado',
            icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              // Realizar acciones adicionales si es necesario
            }
          });
      } else {
          
          // Eliminar el estado de localStorage
          localStorage.removeItem('navItemRed8');
          localStorage.removeItem('textpage8');
      
          Swal.fire({
            title: 'Error!',
            text: 'Lo siento, Tu código no cumple los requisitos',
            icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              // Realizar acciones adicionales si es necesario
            }
          });
      }
  } else {
      // Mostrar un mensaje de error si no se encuentra una URL válida en el código HTML
      Swal.fire({
        title: 'Error!',
        text: 'No se encontró una URL de imagen válida',
        icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Realizar acciones adicionales si es necesario
        }
      });
      
     
  }
}







export function verificarContenido9() {
  const textareaContent = document.getElementById('textareapage9').value;
  const divContenido = document.getElementById('divContenido');
  const errorMensaje = document.getElementById('errorMensaje');

  // Verificar si el contenido del textarea contiene el texto específico
  if (textareaContent.includes('<p><a href="https://www.mundogatos.com/">Mira mas fotos</a> de gatos en nuestra galeria.</p>')) {
    // Extraer la URL de la imagen del código HTML ingresado
    const matches = textareaContent.match(/src=["'](.*?)["']/);
    if (matches && matches.length > 1) {
      const imageUrl = matches[1];

      // Continuar con la lógica
      divContenido.classList.add('imagen-cat');
      divContenido.innerHTML = '';
      errorMensaje.textContent = '';

      // Crear elementos HTML para el h1, la imagen y el párrafo
      const h1 = document.createElement('h1');
      h1.textContent = 'MiauMundo';
      const h2 = document.createElement('h2');
      h2.textContent = 'Foto de Gatitos';

      // Crear un párrafo <p> con el enlace y el texto restante
      const nuevoParrafo = document.createElement('p');
      nuevoParrafo.innerHTML = `
        <a href="https://www.mundogatos.com/">Mira más fotos</a> ${textareaContent.slice(index + 14)}
      `;

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Es un gatito';

      // Agregar los elementos creados al divContenido en el orden deseado
      divContenido.appendChild(h1);
      divContenido.appendChild(h2);
      divContenido.appendChild(nuevoParrafo);
      divContenido.appendChild(img);

      // Guardar el estado en localStorage
      localStorage.setItem('navItemRed9', 'true');
      localStorage.setItem('textpage9', textareaContent);

      // Mostrar el cuadro de diálogo SweetAlert2
      Swal.fire({
        title: '¡Felicidades!',
        text: 'Felicidades, su código ha sido aprobado',
        icon: 'success', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Realizar acciones adicionales si es necesario
        }
      });
    } else {
      // Eliminar el estado de localStorage
      localStorage.removeItem('navItemRed9');
      localStorage.removeItem('textpage9');
      Swal.fire({
        title: 'Error!',
        text: 'Lo siento, Tu código no cumple los requisitos',
        icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Realizar acciones adicionales si es necesario
        }
      });
    }
  } else {
    // Mostrar un mensaje de error si el texto específico no se encuentra en el código HTML
    Swal.fire({
      title: 'Error!',
      text: 'El contenido del textarea no cumple con los requisitos.',
      icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Realizar acciones adicionales si es necesario
      }
    });
  }
}
