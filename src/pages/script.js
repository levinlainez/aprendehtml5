// Obtén una referencia al elemento de la barra de navegación
const navBar = document.getElementById("nav-bar");

// Obtén la posición inicial de la barra de navegación
const navBarTop = navBar.offsetTop;

// Función para verificar el scroll y agregar/quitar la clase 'fixed-nav'
function handleScroll() {
  if (window.scrollY >= navBarTop) {
    document.body.style.paddingTop = navBar.offsetHeight + "px";
    navBar.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    navBar.classList.remove("fixed-nav");
  }
}

// Escucha el evento de scroll
window.addEventListener("scroll", handleScroll);
