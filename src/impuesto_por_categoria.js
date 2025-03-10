export function get_impuesto_por_categoria(codigo_producto){
    let impuesto = 0; 
    if(codigo_producto == 'Bebidas alcohólicas')
      impuesto = 7;
    return impuesto;
}