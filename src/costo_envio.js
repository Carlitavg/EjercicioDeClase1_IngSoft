export function get_costo_envio(cantidad, peso_volumetrico){
    return peso_volumetrico > 200 ? (9 * cantidad) :
        peso_volumetrico > 100 ? (8 * cantidad) :
        peso_volumetrico > 80 ? (6.5 * cantidad) :
        peso_volumetrico > 40 ? (6 * cantidad) :
        peso_volumetrico > 20 ? (5 * cantidad) :
        peso_volumetrico > 10 ? (3.5 * cantidad) : 0;
}