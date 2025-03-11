import { get_descuento_beneficio } from "./descuento_por_beneficio.js";

describe("Descuento por tipo de cliente, precio neto y categoria de producto", () => {
  it("para cliente recurrente, precio neto > 3000 y Alimentos", () => {
    expect(get_descuento_beneficio("Recurrente", 3500, "Alimentos")).toEqual(100);
  }); 
  it("para cliente recurrente, precio neto > 3000 y Alimentos", () => {
    expect(get_descuento_beneficio("Recurrente", 2800, "Alimentos")).toEqual(0);
  }); 
}); 