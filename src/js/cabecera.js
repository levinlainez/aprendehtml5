
// Obtener la referencia al elemento head
const headElement = document.head;



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
linkAnimateCSS.href = "../style/animate.min.css";
headElement.appendChild(linkAnimateCSS);


// Crear un elemento link para Bootstrap CSS
const linkBootstrap = document.createElement("link");
linkBootstrap.rel = "stylesheet";
linkBootstrap.href = "../style/bootstrap.min.css";
headElement.appendChild(linkBootstrap);

// Crear un elemento link para Bootstrap CSS
const linkSweetalert = document.createElement("link");
linkSweetalert.rel = "stylesheet";
linkSweetalert.href = "../style/sweetalert2.css";
headElement.appendChild(linkSweetalert);

// Crear un elemento link para Bootstrap CSS
const linkSweetalert2 = document.createElement("link");
linkSweetalert2.rel = "stylesheet";
linkSweetalert2.href = "../style/sweetalert2.min.css";
headElement.appendChild(linkSweetalert2);



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
metaDescription.content = "Curso de HTM5";
headElement.appendChild(metaDescription);

// Crear un elemento link para el favicon
const linkFavicon = document.createElement("link");
linkFavicon.rel = "icon";
linkFavicon.type = "image/png";
linkFavicon.sizes = "96x96";
linkFavicon.href = "../img/favicon-96x96.png";
headElement.appendChild(linkFavicon);


// Crear un elemento title para el título de la página actual
const pageTitle = document.createElement("title");
pageTitle.textContent = "Curso HTML5"; // Puedes personalizar el título según la página actual
headElement.appendChild(pageTitle);

//header
const encabezadoTemplate = `

<div class="col">
    <div class="">
        <div class="card-body">
            <div class="row justify-content-around align-items-center">
                
                <div class="col-md-4  d-none d-md-block "> <!-- Columna para el título -->
                    <img src="../img/image.png" width="120" height="120" alt="Logo FIDE">

                        
                </div>
                <div class="col-md-4"> <!-- Columna para el título -->
                <h1 class="tw-bold text-dec user-select-none mt-2 centrar-imagen">
                    Curso<i class="fa-solid fa-heart fa-beat" style="--fa-beat-scale: 2.0;"></i>HTML5
                </h1>
            </div>
               
                <div class="col-md-4" > <!-- Columna para la navegación -->
                    <nav id="nav-bar">
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
/*
//navegacion
const navDiv = document.getElementById("nav-pages");
navDiv.style.backgroundColor = "black";
navDiv.style.color = "white"; // Cambia el color del texto a blanco
navDiv.style.marginTop = "10px"; // Cambia el margen superior

const totalPaginas = 42; // Cambia el número según tu necesidad
const numPorPagina = 42; // Cambia el número según tu necesidad
const navTemplate = document.createElement("ul");
navTemplate.classList.add("pagination", "pagination-sm", "pagination-responsive", "mt-4");

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
*/
  


//footer

const footerTemplate = `

<script src="src/js/sweetalert2.all.min.js"></script>
<script src="src/js/bootstrap.bundle.min.js"></script>

`;

const footerDiv = document.getElementById("footer");
footerDiv.innerHTML = footerTemplate;





