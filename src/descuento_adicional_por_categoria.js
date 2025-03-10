function get_descuento_por_categoria(categoria_producto) {

    if(categoria_producto == "Bebidas alcohólicas") return 0;
    return 2;
  }
  
export default get_descuento_por_categoria;