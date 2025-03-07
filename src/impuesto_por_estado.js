function impuesto(codigo_estado) {
    if(codigo_estado == "NV"){
        return 8.00
    }
    if(codigo_estado == "TX"){
        return 6.25
    }
    if(codigo_estado == "AL"){
        return 4.00
    }
    return 6.65
  }
  
  export default impuesto;
  