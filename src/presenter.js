import totalizar from "./totalizar.js";
import { impuesto, valor_impuesto } from "./impuesto_por_estado.js";

const cantidad_items = document.querySelector("#cant_item");
const precio_items = document.querySelector("#precio_item");
const form = document.querySelector("#totalizador_form");
const div = document.querySelector("#mostrar");
const codigo_estados = document.querySelector("#cod_estados");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidad_items.value);
  const precio = Number.parseInt(precio_items.value);
  const total = totalizar(cantidad, precio);
  const estado = codigo_estados.options[codigo_estados.selectedIndex].text;
  const tasa = impuesto('UT');
  const impuesto_valor = valor_impuesto(tasa, total);
  console.log(impuesto_valor);

  // div.innerHTML = "<p>" + "cantidad: " + cantidad + "</p>" + 
  //                 "<p>" + "precio: " + precio + "</p>" + 
  //                 "<p>" + "Total neto: " + total + "</p>";
  div.innerHTML = "<p>"+ "Precio Neto: ("+ cantidad  + " * $" + precio + "): $"+ total+ "</p>" +
                  "<p>" + "Impuesto para " + estado + " (%"+ tasa + "): " + impuesto_valor + "</p>";
  });
