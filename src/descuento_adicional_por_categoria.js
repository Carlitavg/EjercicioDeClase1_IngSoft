function get_descuento_por_categoria(categoria_producto) {

    if(categoria_producto == "Material de escritorio")return 1.5;
    if(categoria_producto == "Bebidas alcohólicas") return 0;
    return 2;
  }
  
export default get_descuento_por_categoria;