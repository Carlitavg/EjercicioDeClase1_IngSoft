import { totalizar_neto, totalizar_con_impuesto, totalizar_con_descuento, totalizar_con_descuento_impuesto } from "./totalizar.js";
import { get_impuesto, get_valor_impuesto } from "./impuesto_por_estado.js";
import { get_descuento, get_valor_descuento } from "./descuento.js";

const cantidad_items = document.querySelector("#cant_item");
const precio_items = document.querySelector("#precio_item");
const form = document.querySelector("#totalizador_form");
const div = document.querySelector("#mostrar");
const codigo_estados = document.querySelector("#cod_estados");
const categoria_productos = document.querySelector("#categorias_productos");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidad_items.value);
  const precio = Number.parseInt(precio_items.value);
  const precio_neto = totalizar_neto(cantidad, precio);
  console.log(precio_neto);
  
  const estado = codigo_estados.options[codigo_estados.selectedIndex].text;
  
  const porcentaje_descuento = get_descuento (precio_neto);
  const valor_descuento = get_valor_descuento(porcentaje_descuento, precio_neto);
  const total_descuento = totalizar_con_descuento(precio_neto, valor_descuento);
  console.log(total_descuento);
 
  const tasa = get_impuesto(estado);
  const valor_impuesto = Number(get_valor_impuesto(tasa, total_descuento).toFixed(2));
  const total_impuesto = totalizar_con_impuesto(total_descuento, valor_impuesto);

  const precio_total = totalizar_con_descuento_impuesto(total_descuento, valor_impuesto);
  const categoria = categoria_productos.options[categoria_productos.selectedIndex].text;

  // div.innerHTML = "<p>" + "cantidad: " + cantidad + "</p>" + 
  //                 "<p>" + "precio: " + precio + "</p>" + 
  //                 "<p>" + "Total neto: " + total + "</p>";
  div.innerHTML = "<p>"+ "Precio Neto: ("+ cantidad  + " * $" + precio + "): $"+ precio_neto+ "</p>" +
                  "<p>" + "Descuento (" + porcentaje_descuento + " %): " + valor_descuento +"</p>" +
                  "<p>" + "Impuesto para " + estado + " (%"+ tasa + "): " + valor_impuesto + "</p>" +
                  "<p>" + "Precio total (descuento e impuesto): $"+ precio_total + "</p>" +
                  "<p>" + "Categoria de producto: "+ categoria + "</p>";
  });
  
