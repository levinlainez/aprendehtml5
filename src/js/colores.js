// Módulo para manejar el color de elementos de navegación
export function setColorForNavItem(selector, isRed) {
    const navItem = document.querySelector(selector);
    if (isRed) {
      navItem.classList.add('nav-item-blue');
      navItem.classList.remove('nav-item-red'); // Asegurarse de que se quite la clase 'nav-item-red'
    } else {
      navItem.classList.add('nav-item-red');
      navItem.classList.remove('nav-item-blue'); // Asegurarse de que se quite la clase 'nav-item-blue'
    }
  }
  
  // Llamar a esta función cuando se cargue la página
  export function setNavColorsOnLoad() {
    // Verificar si el estado de página 1 existe en localStorage y aplicar el color si es necesario
    const navItemRed1State = localStorage.getItem('navItemRed1');
    setColorForNavItem('.page-item a[href="pagina1.html"]', navItemRed1State === 'true');
  
    // Verificar si el estado de página 2 existe en localStorage y aplicar el color si es necesario
    const navItemRed2State = localStorage.getItem('navItemRed2');
    setColorForNavItem('.page-item a[href="pagina2.html"]', navItemRed2State === 'true');

     // Verificar si el estado de página 1 existe en localStorage y aplicar el color si es necesario
     const navItemRed3State = localStorage.getItem('navItemRed3');
     setColorForNavItem('.page-item a[href="pagina3.html"]', navItemRed3State === 'true');
   
     // Verificar si el estado de página 2 existe en localStorage y aplicar el color si es necesario
     const navItemRed4State = localStorage.getItem('navItemRed4');
     setColorForNavItem('.page-item a[href="pagina4.html"]', navItemRed4State === 'true');

      // Verificar si el estado de página 1 existe en localStorage y aplicar el color si es necesario
    const navItemRed5State = localStorage.getItem('navItemRed5');
    setColorForNavItem('.page-item a[href="pagina5.html"]', navItemRed5State === 'true');
  
    // Verificar si el estado de página 2 existe en localStorage y aplicar el color si es necesario
    const navItemRed6State = localStorage.getItem('navItemRed6');
    setColorForNavItem('.page-item a[href="pagina6.html"]', navItemRed6State === 'true');

    // Verificar si el estado de página 2 existe en localStorage y aplicar el color si es necesario
    const navItemRed7State = localStorage.getItem('navItemRed7');
    setColorForNavItem('.page-item a[href="pagina7.html"]', navItemRed7State === 'true');
  
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
        setColorForNavItem('.page-item a[href="' + paginaUrl + '"]', true); // Color azul
        break;
      }
    }
  }
  