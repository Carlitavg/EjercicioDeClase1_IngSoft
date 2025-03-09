import descuento from "./descuento.js";

describe("Sumar", () => {
  it("deberia devolver 3% de descuento para montos iguales a 1000", () => {
    expect(descuento(1000)).toEqual(3);
  });
  it("deberia devolver 3% de descuento para montos mayores a 1000", () => {
    expect(descuento(2030)).toEqual(3);
  });
  it("deberia devolver 0% de descuento para montos menores a 1000", () => {
    expect(descuento(999)).toEqual(0);
    expect(descuento(10)).toEqual(0);
    expect(descuento(160)).toEqual(0);
  });
});

