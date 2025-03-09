function descuento(precio) {
    if(precio < 1000 )
    {
        return 0
    }
    if(precio == 30000) return 15
    if(precio >= 10000) return 10
    if(precio >= 7000) return 7

    if(precio >= 3000) return 5

    return 3
    
  }
  
  export default descuento;
  