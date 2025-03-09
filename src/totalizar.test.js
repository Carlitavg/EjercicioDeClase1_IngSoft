import { totalizar, totalizar_con_descuento, totalizar_con_impuesto, totalizar_con_descuento_impuesto } from "./totalizar.js";

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

describe("Totalizar venta total - descuento", () => {
  it("deberia totalizar la venta neta con el descuento según el monto neto < 1000", () => {
    expect(totalizar_con_descuento(100, 0)).toEqual(100);
  });
  it("deberia totalizar la venta neta con el descuento según el monto neto 1000-3000", () => {
    expect(totalizar_con_descuento(1000, 30)).toEqual(970);
  });
  it("deberia totalizar la venta neta con el descuento según el monto neto 3000-7000", () => {
    expect(totalizar_con_descuento(3000, 150)).toEqual(2850);
  });
  it("deberia totalizar la venta neta con el descuento según el monto neto 7000-10000", () => {
    expect(totalizar_con_descuento(7000, 490)).toEqual(6510);
  });
  it("deberia totalizar la venta neta con el descuento según el monto neto 10000-30000", () => {
    expect(totalizar_con_descuento(10000, 1000)).toEqual(9000);
  });
  it("deberia totalizar la venta neta con el descuento según el monto neto 10000-30000", () => {
    expect(totalizar_con_descuento(30000, 4500)).toEqual(25500);
  });
});

describe("Totalizar venta total - descuento + impuesto", () => {
  it("deberia totalizar la venta neta incluyendo el descuento y el impuesto", () => {
    expect(totalizar_con_descuento_impuesto(1940, 160.05)).toEqual(2100.05);
  });
  it("deberia totalizar la venta neta incluyendo el descuento y el impuesto", () => {
    expect(totalizar_con_descuento_impuesto(60, 3.75)).toEqual(63.75);
  });
});