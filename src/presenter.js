import calcularCadena from "./calculadoraCadenas.js";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadenaTexto = cadena.value

  div.innerHTML = "<p>" + calcularCadena(cadenaTexto) + "</p>";
});