function impuesto(codigo_estado) {
    if(codigo_estado == "NV"){
        return 8.00
    }
    if(codigo_estado == "TX"){
        return 6.25
    }
    return 6.65
  }
  
  export default impuesto;
  