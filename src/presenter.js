import { totalizar, totalizar_con_impuesto } from "./totalizar.js";
import { impuesto, valor_impuesto } from "./impuesto_por_estado.js";
import {descuento, valor_descuento} from "./descuento.js";

const cantidad_items = document.querySelector("#cant_item");
const precio_items = document.querySelector("#precio_item");
const form = document.querySelector("#totalizador_form");
const div = document.querySelector("#mostrar");
const codigo_estados = document.querySelector("#cod_estados");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidad_items.value);
  const precio = Number.parseInt(precio_items.value);
  const precio_neto = totalizar(cantidad, precio);
  const estado = codigo_estados.options[codigo_estados.selectedIndex].text;
  const tasa = impuesto(estado);
  const impuesto_valor = Number(valor_impuesto(tasa, precio_neto).toFixed(2));
  const total_impuesto = totalizar_con_impuesto(precio_neto, impuesto_valor);
  const porcentaje_descuento = descuento (precio_neto);
  const descuento_total = valor_descuento(porcentaje_descuento, precio_neto);

  // div.innerHTML = "<p>" + "cantidad: " + cantidad + "</p>" + 
  //                 "<p>" + "precio: " + precio + "</p>" + 
  //                 "<p>" + "Total neto: " + total + "</p>";
  div.innerHTML = "<p>"+ "Precio Neto: ("+ cantidad  + " * $" + precio + "): $"+ precio_neto+ "</p>" +
                  "<p>" + "Descuento (" + porcentaje_descuento + " %): " + descuento_total +"</p>" +
                  "<p>" + "Impuesto para " + estado + " (%"+ tasa + "): " + impuesto_valor + "</p>" +
                  "<p>" + "Precio total (+impuesto): $"+ total_impuesto;
  });
