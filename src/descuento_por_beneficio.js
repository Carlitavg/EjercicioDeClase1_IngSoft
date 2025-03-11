export function get_descuento_beneficio(tipo_cliente, venta_neta, categoria_productos){
    if (
        tipo_cliente == 'Recurrente' &&
        venta_neta > 3000 &&
        categoria_productos == 'Alimentos')
    return 100;
    else
        return 0;
}