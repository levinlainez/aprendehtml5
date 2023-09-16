// app.js
// app.js
import { verificarContenido, verificarContenido2, verificarContenido3, verificarContenido4, verificarContenido5, verificarContenido6 } from './verificacion.js';
import { redireccionarAPaginaDos, redireccionarAPaginaTres, redireccionarAPaginaCuatro, redireccionarAPaginaCinco, redireccionarAPaginaSeis, redireccionarAPaginaSiete } from './redireccionar.js';

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


