function get_descuento_tipoCliente(tipo_cliente) {
    if(tipo_cliente == "Recurrente") return 0.5;
    return 0;
  }
  
  export default get_descuento_tipoCliente;
  