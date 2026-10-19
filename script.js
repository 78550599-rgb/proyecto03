"use strict";

console.log("Mi Web");

const boton = document.getElementById("saludar");
const saludo = document.getElementById("saludo");

boton.addEventListener("click", () => {
  saludo.textContent = "¡Hola! Gracias por visitar mi sitio web.";
  saludo.classList.add("visible");
});
