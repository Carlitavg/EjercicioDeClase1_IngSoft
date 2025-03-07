export function impuesto(codigo_estado) {
    const impuesto = {
        UT: 6.65,
        NV: 8.00,
        TX: 6.25,
        AL: 4.00,
        CA: 8.25
    };
    
    return impuesto[codigo_estado]
    
  }

export function valor_impuesto(impuesto, valor_neto){
    return (impuesto / 100) * valor_neto
  }

