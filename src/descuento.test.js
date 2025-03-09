import descuento from "./descuento.js";

describe("Sumar", () => {
  it("deberia devolver 3% de descuento para montos mayores a 1000", () => {
    expect(descuento(1000)).toEqual(3);
  });
});

