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
  

