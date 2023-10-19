/*
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene la URL actual
    const currentPageUrl = window.location.href;
  
    // Define el número total de páginas
    const totalPaginas = 69;
  
    // Genera las URLs de las páginas dinámicamente
    const paginaUrls = [];
    for (let i = 1; i <= totalPaginas; i++) {
      paginaUrls.push('pagina' + i + '.html');
    }
  
    // Itera a través de las URLs y verifica si la URL actual coincide
    for (const paginaUrl of paginaUrls) {
      if (currentPageUrl.includes(paginaUrl)) {
        const navItem = document.querySelector('.page-item a[href="' + paginaUrl + '"]');
        navItem.classList.add('nav-item-blue');
        break; // Sale del bucle una vez que se encuentra una coincidencia
      }
    }
  });
  */
  document.addEventListener('DOMContentLoaded', function() {
    // Define el número total de páginas
    const totalPaginas = 69;
    document.getElementById('btn-previous').removeAttribute('disabled');
    // Obtiene el número de página actual desde la URL
    let paginaActual = obtenerNumeroPagina(window.location.href);
    
    // Obtiene el progreso del usuario almacenado en localStorage
    const progresoUsuario = localStorage.getItem("progreso");
    
    // Función para redirigir al usuario a la página anterior
    function redirigirAPaginaAnterior() {
        const paginaAnterior = paginaActual - 1;
        const nuevaUrl = 'pagina' + paginaAnterior + '.html';
        window.location.href = nuevaUrl;
    }
    
    // Verifica el progreso del usuario y controla el acceso a la lección
    if (paginaActual > 1 && (!progresoUsuario || paginaActual > parseInt(progresoUsuario))) {
        // Si el usuario intenta acceder a una lección posterior sin completar la anterior,
        // muestra un mensaje de error y redirige al usuario a la página del ejercicio anterior.
        Swal.fire({
            title: 'Error!',
            text: 'Debes completar el ejercicio anterior antes de acceder a esta lección.',
            icon: 'error', // Puedes cambiar el icono a 'info', 'warning', 'error', etc.
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Realizar acciones adicionales si es necesario
            }
        });
        
        redirigirAPaginaAnterior();
    }
    
    // Asigna el evento al botón "Siguiente"
    const btnNext = document.getElementById('btn-next');
    btnNext.addEventListener('click', function() {
        if (paginaActual < totalPaginas) {
            paginaActual++;
            cambiarPagina(paginaActual);
        }
    });
    
    // Asigna el evento al botón "Anterior"
    const btnPrevious = document.getElementById('btn-previous');
    btnPrevious.addEventListener('click', function() {
        if (paginaActual > 1) {
            paginaActual--;
            cambiarPagina(paginaActual);
        }
    });
    
    // Función para cambiar la página actual
    function cambiarPagina(pagina) {
        // Actualiza el progreso del usuario en localStorage
        localStorage.setItem("progreso", pagina.toString());
        
        // Actualiza la URL o realiza cualquier acción necesaria
        const nuevaUrl = 'pagina' + pagina + '.html';
        window.location.href = nuevaUrl;
    }
    
    // Función para obtener el número de página de la URL actual
    function obtenerNumeroPagina(url) {
        const match = url.match(/pagina(\d+)\.html/);
        if (match && match[1]) {
            return parseInt(match[1]);
        }
        return 1; // Página predeterminada si no se encuentra un número de página en la URL
    }
});






  
  // Agregar un evento para guardar el contenido del textarea en localStorage cuando cambie
  document.addEventListener("input", function (event) {
    const textarea = event.target;
    if (textarea && textarea.id && textarea.id.startsWith("textareapage")) {
      const storageKey = `textpage${textarea.id.substring(12)}`;
      localStorage.setItem(storageKey, textarea.value);
    }
  });

  
//header
function cargarHojaDeEstilo(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

function verificarEstadoYEstilo(elementId, storageKey) {
  const estadoEnLocalStorage = localStorage.getItem(storageKey);

  if (estadoEnLocalStorage === 'true') {
    const elemento = document.getElementById(elementId);

    if (elemento) {
      elemento.style.backgroundColor = 'red';
      elemento.style.color = 'white';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Llama a la función para verificar y configurar el estilo de cada elemento de navegación
  verificarEstadoYEstilo('page1', 'navItemRed1');
  verificarEstadoYEstilo('page2', 'navItemRed2');
  verificarEstadoYEstilo('page3', 'navItemRed3');
  verificarEstadoYEstilo('page4', 'navItemRed4');
  verificarEstadoYEstilo('page5', 'navItemRed5');
  verificarEstadoYEstilo('page6', 'navItemRed6');
  verificarEstadoYEstilo('page7', 'navItemRed7');
  verificarEstadoYEstilo('page8', 'navItemRed8');
  verificarEstadoYEstilo('page9', 'navItemRed9');
  verificarEstadoYEstilo('page10', 'navItemRed10');
  verificarEstadoYEstilo('page11', 'navItemRed11');
  // ... y así sucesivamente para otros elementos de navegación
});

document.addEventListener("DOMContentLoaded", () => {
  // Ocultar el loader cuando se cargue completamente el HTML y JavaScript
  ocultarLoader();
});

function mostrarLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
}


