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
  it("deberia devolver 5% de descuento para montos iguales a 3000", () => {
    expect(descuento(3000)).toEqual(5);
  });
  it("deberia devolver 5% de descuento para montos iguales y mayores a 3000", () => {
    expect(descuento(3010)).toEqual(5);
    expect(descuento(3660)).toEqual(5);
  });
  it("deberia devolver 7% de descuento para montos iguales a 7000", () => {
    expect(descuento(7000)).toEqual(7);
  });
  it("deberia devolver 7% de descuento para montos iguales y mayores a 7000", () => {
    expect(descuento(7010)).toEqual(7);
    expect(descuento(7660)).toEqual(7);
  });
  it("deberia devolver 10% de descuento para montos iguales a 10000", () => {
    expect(descuento(10000)).toEqual(10);
  });
  
});

