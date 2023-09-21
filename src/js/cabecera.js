


            
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





