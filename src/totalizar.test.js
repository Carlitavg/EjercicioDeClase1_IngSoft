import { totalizar, totalizar_con_descuento, totalizar_con_impuesto } from "./totalizar.js";

describe("Totalizar venta neta", () => {
  it("deberia Multiplicar dos numeros", () => {
    expect(totalizar(3, 2)).toEqual(6);
  });
});

describe("Totalizar venta total + impuesto", () => {
  it("deberia multiplicar la venta neta con el impuesto para estado de UT", () => {
    expect(totalizar_con_impuesto(100, 6.65)).toEqual(106.65);
  });
  it("deberia multiplicar la venta neta con el impuesto para estado de NV", () => {
    expect(totalizar_con_impuesto(100, 8.00)).toEqual(108.00);
  });
  it("deberia multiplicar la venta neta con el impuesto para estado de TX", () => {
    expect(totalizar_con_impuesto(100, 6.25)).toEqual(106.25);
  });
  it("deberia multiplicar la venta neta con el impuesto para estado de AL", () => {
    expect(totalizar_con_impuesto(100, 4.00)).toEqual(104.00);
  });
  it("deberia multiplicar la venta neta con el impuesto para estado de CA", () => {
    expect(totalizar_con_impuesto(100, 8.25)).toEqual(108.25);
  });
});

describe("Totalizar venta total - impuesto", () => {
  it("deberia totalizar la venta neta con el descuento según el monto neto < 1000", () => {
    expect(totalizar_con_descuento(100, 0)).toEqual(100);
  });
});