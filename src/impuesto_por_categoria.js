export function get_impuesto_por_categoria(categoria_producto){
    const impuesto = {
        'Alimentos': 0,
        'Bebidas alcohólicas': 7,
        'Material de escritorio' : 0,
        'Muebles': 3,
        'Electrónicos': 4,
        'Vestimenta': 2,
        'Varios': 0,
    };
    return impuesto[categoria_producto];
}

//export function get_valor_impuesto_por_categoria(impuesto_por_categoria, total){
    //return Number(((impuesto_por_categoria / 100) * total).toFixed(2));
//}