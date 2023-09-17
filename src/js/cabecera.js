// Variable global para determinar si es la página de inicio
const esPaginaInicio = window.location.pathname.endsWith("index.html");

// Obtener la referencia al elemento head
const headElement = document.head;

// Crear un elemento link para Bootstrap CSS
const linkBootstrap = document.createElement("link");
linkBootstrap.rel = "stylesheet";
linkBootstrap.href = "../style/bootstrap.min.css";
headElement.appendChild(linkBootstrap);

// Crear un elemento link para tu estilo personalizado
const linkCustomStyle = document.createElement("link");
linkCustomStyle.rel = "stylesheet";
linkCustomStyle.href = "../style/style.css";
headElement.appendChild(linkCustomStyle);

// Crear un elemento meta para X-UA-Compatible
const metaXUA = document.createElement("meta");
metaXUA.setAttribute("http-equiv", "X-UA-Compatible");
metaXUA.content = "IE=edge";
headElement.appendChild(metaXUA);

// Crear un elemento meta para viewport
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0";
headElement.appendChild(metaViewport);

// Crear un elemento meta para descripción
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Juego de ahorcado, hecho por el grupo 5 de Programacion web 2";
headElement.appendChild(metaDescription);

// Crear un elemento link para el favicon
const linkFavicon = document.createElement("link");
linkFavicon.rel = "icon";
linkFavicon.type = "image/png";
linkFavicon.sizes = "96x96";
linkFavicon.href = "../img/favicon-96x96.png";
headElement.appendChild(linkFavicon);

// Crear un elemento link para Font Awesome CSS
const linkFontAwesome = document.createElement("link");
linkFontAwesome.rel = "stylesheet";
linkFontAwesome.href = "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
linkFontAwesome.integrity = "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf";
linkFontAwesome.crossOrigin = "anonymous";
headElement.appendChild(linkFontAwesome);

// Crear un elemento link para Font Awesome 6.0.0 CSS
const linkFontAwesome6 = document.createElement("link");
linkFontAwesome6.rel = "stylesheet";
linkFontAwesome6.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
linkFontAwesome6.integrity = "sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==";
linkFontAwesome6.crossOrigin = "anonymous";
linkFontAwesome6.referrerPolicy = "no-referrer";
headElement.appendChild(linkFontAwesome6);

// Crear un elemento link para animate.css
const linkAnimateCSS = document.createElement("link");
linkAnimateCSS.rel = "stylesheet";
linkAnimateCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
headElement.appendChild(linkAnimateCSS);

// Crear un elemento title para el título de la página actual
const pageTitle = document.createElement("title");
pageTitle.textContent = "Curso HTML5"; // Puedes personalizar el título según la página actual
headElement.appendChild(pageTitle);

//header
const encabezadoTemplate = `

<div class="col">
    <div class="card  shadow">
        <div class="card-body">
            <div class="row justify-content-around align-items-center">
                
                <div class="col-md-4  d-none d-md-block "> <!-- Columna para el título -->
                    <img src="../img/logo-FIDE.png" width="100" height="75" alt="Logo FIDE">

                        
                </div>
                <div class="col-md-4"> <!-- Columna para el título -->
                    <h1 class="tw-bold text-dec user-select-none mt-2 centrar-imagen">
                        Curso<i class="fa-solid fa-heart fa-beat" style="--fa-beat-scale: 2.0;"></i>HTML5
                    </h1>
                </div>
                <div class="col-md-4" > <!-- Columna para la navegación -->
                    <nav >
                        <ul class="nav nav-pills justify-content-center "> <!-- Alinea la navegación a la derecha -->
                       
                            <!-- Alinea la navegación a la derecha -->
                            <li class="nav-item ">
                                <a class="nav-link navegacion" href="../../index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navegacion" href="#">Cursos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navegacion" href="#">Estudios</a>
                            </li>
                        
                    
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

`;

const headerDiv = document.getElementById("header");
headerDiv.innerHTML = encabezadoTemplate;

//navegacion
const navDiv = document.getElementById("nav-pages");
const totalPaginas = 22; // Cambia el número según tu necesidad
const numPorPagina = 22; // Cambia el número según tu necesidad
const navTemplate = document.createElement("ul");
navTemplate.classList.add("pagination", "pagination-sm", "pagination-responsive");

for (let i = 1; i <= totalPaginas; i++) {
  const li = document.createElement("li");
  li.classList.add("page-item");
  
  const a = document.createElement("a");
  a.classList.add("page-link");
  a.href = `pagina${i}.html`;
  a.textContent = i;
  
  li.appendChild(a);
  navTemplate.appendChild(li);
  
  if (i % numPorPagina === 0 || i === totalPaginas) {
    navDiv.appendChild(navTemplate.cloneNode(true));
    navTemplate.innerHTML = "";
  }
}
  
  


//footer

const footerTemplate = `
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
    crossorigin="anonymous"></script>
<!-- Incluye el archivo JavaScript compartido para todas las páginas -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://www.gstatic.com/charts/loader.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js"></script>
<script src="src/js/bootstrap.bundle.min.js"></script>
`;

const footerDiv = document.getElementById("footer");
footerDiv.innerHTML = footerTemplate;





