// app.js
// app.js
import { verificarContenido, verificarContenido2, verificarContenido3, verificarContenido4, verificarContenido5, 
  verificarContenido6, verificarContenido7 } from './verificacion.js';
import { redireccionarAPaginaDos, redireccionarAPaginaTres, redireccionarAPaginaCuatro, redireccionarAPaginaCinco, 
  redireccionarAPaginaSeis, redireccionarAPaginaSiete, redireccionarAPaginaOcho } from './redireccionar.js';

// Verificar si el elemento con el ID 'verificarBoton' existe antes de agregar un evento
const verificarBoton = document.getElementById('verificarBoton');
if (verificarBoton) {
  verificarBoton.addEventListener('click', verificarContenido);
}

// Verificar si el elemento con el ID 'verificarBoton1' existe antes de agregar un evento
const verificarBoton2 = document.getElementById('verificarBoton2');
if (verificarBoton2) {
  verificarBoton2.addEventListener('click', verificarContenido2);
}

// Verificar si el elemento con el ID 'verificarBoton2' existe antes de agregar un evento
const verificarBoton3 = document.getElementById('verificarBoton3');
if (verificarBoton3) {
  verificarBoton3.addEventListener('click', verificarContenido3);
}

// Verificar si el elemento con el ID 'verificarBoton2' existe antes de agregar un evento
const verificarBoton4 = document.getElementById('verificarBoton4');
if (verificarBoton4) {
  verificarBoton4.addEventListener('click', verificarContenido4);
}

// Verificar si el elemento con el ID 'verificarBoton2' existe antes de agregar un evento
const verificarBoton5 = document.getElementById('verificarBoton5');
if (verificarBoton5) {
  verificarBoton5.addEventListener('click', verificarContenido5);
}

// Verificar si el elemento con el ID 'verificarBoton2' existe antes de agregar un evento
const verificarBoton6 = document.getElementById('verificarBoton6');
if (verificarBoton6) {
  verificarBoton6.addEventListener('click', verificarContenido6);
}

// Verificar si el elemento con el ID 'verificarBoton2' existe antes de agregar un evento
const verificarBoton7 = document.getElementById('verificarBoton7');
if (verificarBoton7) {
  verificarBoton7.addEventListener('click', verificarContenido7);
}
// Verificar si el elemento con el ID 'siguiente' existe antes de agregar un evento
const siguienteBoton = document.getElementById('siguiente');
if (siguienteBoton) {
  siguienteBoton.addEventListener('click', redireccionarAPaginaDos);
}

// Verificar si el elemento con el ID 'siguiente2' existe antes de agregar un evento
const siguiente2Boton = document.getElementById('siguiente2');
if (siguiente2Boton) {
  siguiente2Boton.addEventListener('click', redireccionarAPaginaTres);
}

// Verificar si el elemento con el ID 'siguiente3' existe antes de agregar un evento
const siguiente3Boton = document.getElementById('siguiente3');
if (siguiente3Boton) {
  siguiente3Boton.addEventListener('click', redireccionarAPaginaCuatro);
}

// Verificar si el elemento con el ID 'siguiente3' existe antes de agregar un evento
const siguiente4Boton = document.getElementById('siguiente4');
if (siguiente4Boton) {
  siguiente4Boton.addEventListener('click', redireccionarAPaginaCinco);
}

// Verificar si el elemento con el ID 'siguiente3' existe antes de agregar un evento
const siguiente5Boton = document.getElementById('siguiente5');
if (siguiente5Boton) {
  siguiente5Boton.addEventListener('click', redireccionarAPaginaSeis);
}

// Verificar si el elemento con el ID 'siguiente3' existe antes de agregar un evento
const siguiente6Boton = document.getElementById('siguiente6');
if (siguiente6Boton) {
  siguiente6Boton.addEventListener('click', redireccionarAPaginaSiete);
}

// Verificar si el elemento con el ID 'siguiente3' existe antes de agregar un evento
const siguiente7Boton = document.getElementById('siguiente7');
if (siguiente7Boton) {
  siguiente7Boton.addEventListener('click', redireccionarAPaginaOcho);
}

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



document.addEventListener("DOMContentLoaded", function () {
  // Verifica si el estado existe en localStorage
  const estadoEnLocalStorage = localStorage.getItem('navItemRed1');

  if (estadoEnLocalStorage === 'true') {
    // Si existe, obtén el elemento con id "page1"
    const page1Element = document.getElementById('page1');
  
    // Aplica el estilo de fondo rojo al elemento
    if (page1Element) {
      page1Element.style.backgroundColor = 'red';
      page1Element.style.color = 'white';
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // Verifica si el estado existe en localStorage
  const estadoEnLocalStorage2 = localStorage.getItem('navItemRed2');

  if (estadoEnLocalStorage2 === 'true') {
    // Si existe, obtén el elemento con id "page2"
    const page2Element = document.getElementById('page2');
  
    // Aplica el estilo de fondo rojo al elemento
    if (page2Element) {
      page2Element.style.backgroundColor = 'red';
      page2Element.style.color = 'white';
    }
  }
});




const generarPaginacion = (totalPaginas, ruta) => {
  const completadoDiv = document.getElementById("completado");
  completadoDiv.innerHTML = ""; // Limpia el contenido anterior

  let ul = null; // Inicializa la variable ul
  let contadorLi = 0; // Inicializa el contador de elementos li

  for (let i = 1; i <= totalPaginas; i++) {
    if (contadorLi === 0 || contadorLi % 20 === 0) {
      // Crea un nuevo ul cuando el contador alcanza 0 o múltiplo de 20
      ul = document.createElement("ul");
      ul.classList.add("pagination", "pagination-sm", "pagination-responsive");
    }

    const li = document.createElement("li");
    li.classList.add("page-item");
    
    const a = document.createElement("a");
    a.classList.add("page-link");
    a.href = `${ruta}/pagina${i}.html`; // Usar la ruta proporcionada
    a.textContent = i.toString().padStart(2, '0'); // Agrega ceros a la izquierda si es necesario
    a.id = `page${i}`; // Asigna un ID único al enlace

    li.appendChild(a);
    ul.appendChild(li);
    
    contadorLi++;

    if (contadorLi === 20 || i === totalPaginas) {
      // Agrega el ul al completadoDiv cuando el contador llega a 20 o es la última página
      completadoDiv.appendChild(ul);
      contadorLi = 0; // Reinicia el contador
    }
  }
}

// Llamar a la función con el número total de páginas y la ruta de las páginas
generarPaginacion(64, 'src/pages'); // Cambia la ruta según tu necesidad





