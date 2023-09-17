const generarPaginacion = (totalPaginas) => {
  const completadoDiv = document.getElementById("completado");
  
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
    a.href = `src/pages/pagina${i}.html`;
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

// Llamar a la función con el número total de páginas
generarPaginacion(64); // Cambia el número según tu necesidad