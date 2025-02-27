import sumar from "./sumador";

const cant_item = document.querySelector("#cant-item");
const div = document.querySelector("#mostrar");
const botonTotalizar = document.querySelector("#totalizador-button");

botonTotalizar.addEventListener("click", (event) => {
  event.preventDefault();
  const cantidad = Number.parseInt(cant_item.value);
  div.innerHTML = "<p>" + cantidad + "</p>";
});


  

