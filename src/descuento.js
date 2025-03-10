export function get_descuento(precio) {
    // if(precio < 1000 )
    // {
    //     return 0
    // }
    // if(precio >= 30000) return 15
    // if(precio >= 10000) return 10
    // if(precio >= 7000) return 7

    // if(precio >= 3000) return 5

    // return 3
    return precio >= 30000 ? 15 :
           precio >= 10000 ? 10 :
           precio >= 7000  ? 7  :
           precio >= 3000  ? 5  :
           precio >= 1000  ? 3  : 0;
  }
  
  //export function get_valor_descuento(porsentaje_descuento, valor_neto){
    //return (porsentaje_descuento / 100) * valor_neto
  //}


  