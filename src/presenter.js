import { totalizar_neto, get_valor_tasa, aplicar_impuesto, aplicar_descuento} from "./totalizar.js";
import { get_impuesto } from "./impuesto_por_estado.js";
import { get_descuento } from "./descuento.js";
import { get_impuesto_por_categoria } from "./impuesto_por_categoria.js";

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
  const valor_descuento = get_valor_tasa(porcentaje_descuento, precio_neto);
  const total_descuento = aplicar_descuento(precio_neto, valor_descuento);
  console.log(total_descuento);
 
  const tasa = get_impuesto(estado);
  const valor_impuesto = Number(get_valor_tasa(tasa, total_descuento).toFixed(2));
  const total_impuesto = aplicar_impuesto(total_descuento, valor_impuesto);

  const precio_total = aplicar_impuesto(total_descuento, valor_impuesto);
  const categoria = categoria_productos.options[categoria_productos.selectedIndex].text;
  const tasa_por_categoria = get_impuesto_por_categoria(categoria);
  const valor_impuesto_por_categoria = get_valor_tasa(precio_total, tasa_por_categoria);

  const precio_total_impuesto_categoria = aplicar_impuesto(precio_total, valor_impuesto_por_categoria);


  // div.innerHTML = "<p>" + "cantidad: " + cantidad + "</p>" + 
  //                 "<p>" + "precio: " + precio + "</p>" + 
  //                 "<p>" + "Total neto: " + total + "</p>";
  div.innerHTML = "<p>"+ "Precio Neto: ("+ cantidad  + " * $" + precio + "): $"+ precio_neto+ "</p>" +
                  "<p>" + "Descuento (" + porcentaje_descuento + " %): " + valor_descuento +"</p>" +
                  "<p>" + "Impuesto para " + estado + " (%"+ tasa + "): " + valor_impuesto + "</p>" +
                  "<p>" + "Precio total (descuento e impuesto): $"+ precio_total + "</p>" +
                  //"<p>" + "Categoria de producto: "+ categoria + "</p>" +
                  "<p>" + "Impuesto para " + categoria + " (%"+ tasa_por_categoria + "): "+ valor_impuesto_por_categoria + "</p>" +
                  "<p>" + "Precio total (impuesto por categoria): $"+ precio_total_impuesto_categoria + "</p>" ;

  });
  
