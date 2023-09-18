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
  
  
  function verificarEstadoYEstilo(itemId, storageKey) {
    const estadoEnLocalStorage = localStorage.getItem(storageKey);
  
    if (estadoEnLocalStorage === 'true') {
      const elemento = document.getElementById(itemId);
  
      if (elemento) {
        elemento.style.backgroundColor = 'red';
        elemento.style.color = 'white';
      }
    }
  }
  
  // Llama a la función para verificar y configurar el estilo de cada elemento
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

  // Crear un bucle for para iterar del 1 al 8
for (let i = 1; i <= 8; i++) {
    // Obtener el elemento textarea por su ID
    const textarea = document.getElementById(`textareapage${i}`);
    
    // Verificar si el elemento textarea existe y si hay un valor en localStorage
    if (textarea) {
      const storageKey = `textpage${i}`;
      const textoGuardado = localStorage.getItem(storageKey);
      
      // Si se encuentra un valor en localStorage, establecerlo en el textarea
      if (textoGuardado) {
        textarea.value = textoGuardado;
      }
    }
  }
  
  // Agregar un evento para guardar el contenido del textarea en localStorage cuando cambie
  document.addEventListener("input", function (event) {
    const textarea = event.target;
    if (textarea && textarea.id && textarea.id.startsWith("textareapage")) {
      const storageKey = `textpage${textarea.id.substring(12)}`;
      localStorage.setItem(storageKey, textarea.value);
    }
  });
  
  

