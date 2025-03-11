export function get_costo_envio(peso_volumetrico){
    return peso_volumetrico > 200 ? 9 :
        peso_volumetrico > 100 ? 8 :
        peso_volumetrico > 80 ? 6.5 :
        peso_volumetrico > 40 ? 6 :
        peso_volumetrico > 20 ? 5 :
        peso_volumetrico > 10 ? 3.5 : 0;
}