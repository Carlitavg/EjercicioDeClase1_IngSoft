import get_descuento_tipoCliente from "./descuento_envio_por_tipoCliente.js";

describe("Descuento en el costo de envio por el tipo de Cliente", () => {
  it("para el tipo de cliente 'Normal' se deberia aplicar 0% de descuento en el envio", () => {
    expect(get_descuento_tipoCliente("Normal")).toEqual(0);
  }); 
}); 