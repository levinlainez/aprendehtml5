// app.js
// app.js
import { verificarContenido, verificarContenido2, verificarContenido3 } from './verificacion.js';
import { redireccionarAPaginaDos, redireccionarAPaginaTres, redireccionarAPaginaCuatro } from './redireccionar.js';

// Verificar si el elemento con el ID 'verificarBoton' existe antes de agregar un evento
const verificarBoton = document.getElementById('verificarBoton');
if (verificarBoton) {
  verificarBoton.addEventListener('click', verificarContenido);
}

// Verificar si el elemento con el ID 'verificarBoton1' existe antes de agregar un evento
const verificarBoton1 = document.getElementById('verificarBoton1');
if (verificarBoton1) {
  verificarBoton1.addEventListener('click', verificarContenido2);
}

// Verificar si el elemento con el ID 'verificarBoton2' existe antes de agregar un evento
const verificarBoton2 = document.getElementById('verificarBoton2');
if (verificarBoton2) {
  verificarBoton2.addEventListener('click', verificarContenido3);
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
