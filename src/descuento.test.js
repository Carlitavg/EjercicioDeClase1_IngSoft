import descuento from "./descuento.js";

describe("Sumar", () => {
  it("deberia devolver 3% de descuento para montos iguales a 1000", () => {
    expect(descuento(1000)).toEqual(3);
  });
  it("deberia devolver 3% de descuento para montos mayores a 1000", () => {
    expect(descuento(2030)).toEqual(3);
  });
});

