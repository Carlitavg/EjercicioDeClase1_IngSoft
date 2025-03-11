import { totalizar_neto, get_valor_tasa, aplicar_impuesto, aplicar_descuento, sumar_costo_envio} from "./totalizar.js";
import { get_impuesto } from "./impuesto_por_estado.js";
import { get_descuento } from "./descuento.js";
import { get_impuesto_por_categoria } from "./impuesto_por_categoria.js";
import { get_descuento_por_categoria } from "./descuento_adicional_por_categoria.js";
import { get_costo_envio } from "./costo_envio.js";
import { get_descuento_tipoCliente } from "./descuento_envio_por_tipoCliente.js";
import { get_descuento_tipoCliente } from "./descuento_envio_por_tipoCliente.js";

const cantidad_items = document.querySelector("#cant_item");
const precio_items = document.querySelector("#precio_item");
const form = document.querySelector("#totalizador_form");
const div = document.querySelector("#mostrar");
const codigo_estados = document.querySelector("#cod_estados");
const categoria_productos = document.querySelector("#categorias_productos");
const peso_vol = document.querySelector("#peso_volumetrico");
const tipos_clientes = document.querySelector("#tipo_cliente");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidad_items.value);
  const precio = Number.parseInt(precio_items.value);
  const precio_neto = totalizar_neto(cantidad, precio);
  const peso = Number.parseInt(peso_vol.value)

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
  const tasa_por_categoria_impuesto = get_impuesto_por_categoria(categoria);
  const valor_impuesto_por_categoria = get_valor_tasa(precio_total, tasa_por_categoria_impuesto);
  const tasa_por_categoria_descuento = get_descuento_por_categoria(categoria);
  const valor_descuento_por_categoria = get_valor_tasa(precio_total, tasa_por_categoria_descuento);

  const precio_total_impuesto_categoria = aplicar_impuesto(precio_total, valor_impuesto_por_categoria);
  const precio_total_descuento_categoria = aplicar_descuento(precio_total, valor_descuento_por_categoria);
  const precio_total_categoria = Number(aplicar_descuento(precio_total_impuesto_categoria, valor_descuento_por_categoria).toFixed(2));

  const costo_envio = get_costo_envio(peso);
  const total_con_costo_envio = sumar_costo_envio(precio_total_categoria, costo_envio);


  const tipoCliente = tipos_clientes.options[tipos_clientes.selectedIndex].text;
  const tasa_descuento_por_tipoCliente = get_descuento_tipoCliente(tipoCliente);
  const valor_descuento_por_tipoCliente = get_valor_tasa(costo_envio, tasa_descuento_por_tipoCliente);

  const total_con_descuento_envio_tipoCliente = aplicar_descuento(total_con_costo_envio, valor_descuento_por_tipoCliente);


  // div.innerHTML = "<p>" + "cantidad: " + cantidad + "</p>" + 
  //                 "<p>" + "precio: " + precio + "</p>" + 
  //                 "<p>" + "Total neto: " + total + "</p>";
  div.innerHTML = "<p>"+ "Precio Neto: ("+ cantidad  + " * $" + precio + "): $"+ precio_neto+ "</p>" +
                  "<p>" + "Descuento (" + porcentaje_descuento + " %): " + valor_descuento +"</p>" +
                  "<p>" + "Impuesto para " + estado + " (%"+ tasa + "): " + valor_impuesto + "</p>" +
                  "<p>" + "Precio total (descuento e impuesto) ("+ 
                  precio_neto + " + " + valor_impuesto + " - " + valor_descuento + "): $"+ precio_total + "</p>" +
                  "<p>" + "Impuesto para " + categoria + " (%"+ tasa_por_categoria_impuesto + "): "+ valor_impuesto_por_categoria + "</p>" +
                  "<p>" + "Descuento adicional para " + categoria + " ("+ tasa_por_categoria_descuento + " %): " + valor_descuento_por_categoria + "</p>"+
                  // "<p>" + "Precio total (impuesto por categoria): $"+ precio_total_impuesto_categoria + "</p>" +
                  // "<p>" + "Precio total (descuento por categoria): $"+ precio_total_descuento_categoria + "</p>" +
                  "<p>" + "Precio total (impuesto y descuento por categoria) ("+ 
                  precio_total + " + " + valor_impuesto_por_categoria + " - " + valor_descuento_por_categoria + "): $"+ precio_total_categoria + "</p>" +
                  //"<p>" + "Peso volumétrico: " + peso + "</p>" +
                  //"<p>" + "Costo de envio: $" + costo_envio + "</p>" + 
                  "<p>" + "Descuento en envio para Cliente '" + tipoCliente + "' (" + tasa_descuento_por_tipoCliente +" %): "+ valor_descuento_por_tipoCliente + "</p>" +
                  "<p>" + "Precio total (total y costo de envio - descuento Envio) (" +
                  precio_total_categoria + " + " + costo_envio + " - " + valor_descuento_por_tipoCliente + "): $" + total_con_descuento_envio_tipoCliente + "</p>" ;
  });
  
