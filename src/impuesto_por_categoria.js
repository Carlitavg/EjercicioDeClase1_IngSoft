export function get_impuesto_por_categoria(codigo_producto){
    const impuesto = {
        'Alimentos': 0,
        'Bebidas alcohólicas': 7
    }
    return impuesto[codigo_producto];
}