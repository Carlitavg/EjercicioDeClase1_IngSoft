export function totalizar_neto(precio, cantidad) {
    return precio * cantidad;
}
  
export function totalizar_con_impuesto(total_descuento, impuesto) {
    return total_descuento + impuesto;
}

export function totalizar_con_descuento(neto, descuento) {
  return neto - descuento;
}

export function totalizar_con_descuento_impuesto(total_descuento, impuesto) {
  return total_descuento + impuesto;
}