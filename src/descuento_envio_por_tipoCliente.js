function get_descuento_tipoCliente(tipo_cliente) {
    if(tipo_cliente == "Especial") return 1.5;
    if(tipo_cliente == "Antiguo Recurrente") return 1;
    if(tipo_cliente == "Recurrente") return 0.5;
    return 0;
  }
  
  export default get_descuento_tipoCliente;
  