function impuesto(codigo_estado) {
    const descuentos = {
        UT: 6.65,
        NV: 8.00,
        TX: 6.25,
        AL: 4.00,
        CA: 8.25
      };
    
      return descuentos[codigo_estado]
    
  }
  
  export default impuesto;
  