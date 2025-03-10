export function totalizar_neto(precio, cantidad) {
  return precio * cantidad;
}

export function get_valor_tasa(tasa, monto) {
  return Number(((tasa/ 100) * monto).toFixed(2));
}
  
export function aplicar_impuesto(monto, impuesto) {
  return monto + impuesto;
}

export function aplicar_descuento(monto, descuento) {
  return monto - descuento;
}
