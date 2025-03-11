export function get_costo_envio(peso_volumetrico){
    if (peso_volumetrico > 10)
        return 3.5;
    else
        return 0;
}