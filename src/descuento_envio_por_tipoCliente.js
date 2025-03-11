export function get_descuento_tipoCliente(tipo_cliente) {
    const descuento = {
        "Especial": 1.5,
        "Antiguo Recurrente": 1,
        "Recurrente": 0.5,
        "Normal": 0
    };
    return descuento[tipo_cliente];
  }