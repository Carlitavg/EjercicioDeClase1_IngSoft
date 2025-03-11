import { get_descuento_tipoCliente } from "./descuento_envio_por_tipoCliente.js";

describe("Descuento en el costo de envio por el tipo de Cliente", () => {
  it("para el tipo de cliente 'Normal' se deberia aplicar 0% de descuento en el envio", () => {
    expect(get_descuento_tipoCliente("Normal")).toEqual(0);
  }); 
  it("para el tipo de cliente 'Recurrente' se deberia aplicar 0.5% de descuento en el envio", () => {
    expect(get_descuento_tipoCliente("Recurrente")).toEqual(0.5);
  }); 
  it("para el tipo de cliente 'Antiguo Recurrente' se deberia aplicar 1% de descuento en el envio", () => {
    expect(get_descuento_tipoCliente("Antiguo Recurrente")).toEqual(1);
  }); 
  it("para el tipo de cliente 'Especial' se deberia aplicar 1.5% de descuento en el envio", () => {
    expect(get_descuento_tipoCliente("Especial")).toEqual(1.5);
  }); 
}); 