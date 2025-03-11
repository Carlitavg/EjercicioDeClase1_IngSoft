export function get_descuento_beneficio(tipo_cliente, venta_neta, categoria_productos){
    if (
        tipo_cliente == 'Especial' &&
        venta_neta > 7000 &&
        categoria_productos == 'Electrónicos')
        return 200;
    else if (
        tipo_cliente == 'Recurrente' &&
        venta_neta > 3000 &&
        categoria_productos == 'Alimentos')
        return 100;
    else
        return 0;
}