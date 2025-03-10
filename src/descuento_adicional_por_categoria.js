export function get_descuento_por_categoria(categoria_producto){
    const descuento_adicional = {
        'Alimentos': 2,
        'Bebidas alcohólicas': 0,
        'Material de escritorio' : 1.5,
        'Muebles': 0,
        'Electrónicos': 1,
        'Vestimenta': 0,
        'Varios': 0,
    };
    return descuento_adicional[categoria_producto];
}