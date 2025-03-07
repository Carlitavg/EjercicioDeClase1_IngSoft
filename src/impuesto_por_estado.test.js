import {impuesto, valor_impuesto} from "./impuesto_por_estado.js";

describe("Impuesto por estado", () => {
  it("para el codigo de estado UT deberia devolver el porcentaje 6.65%", () => {
    expect(impuesto("UT")).toEqual(6.65);
  });
  it("para el codigo de estado 'NV' deberia devolver el porcentaje 8.00%", () => {
    expect(impuesto("NV")).toEqual(8.00);
  });
  it("para el codigo de estado 'TX' deberia devolver el porcentaje 6.25%", () => {
    expect(impuesto("TX")).toEqual(6.25);
  });
  it("para el codigo de estado 'AL' deberia devolver el porcentaje 4.00%", () => {
    expect(impuesto("AL")).toEqual(4.00);
  });
  it("para el codigo de estado 'CA' deberia devolver el porcentaje 8.25%", () => {
    expect(impuesto("CA")).toEqual(8.25);
  });
  it("para el codigo de estado 'UT' deberia devolver el impuesto 6.65% segun el valor neto", () => {
    expect(valor_impuesto(6.65, 120)).toEqual(7.98);
  });
  it("para el codigo de estado 'NV' deberia devolver el impuesto 8.00% segun el valor neto", () => {
    expect(valor_impuesto(8.00, 100)).toEqual(8.00);
  });
  it("para el codigo de estado 'TX' deberia devolver el impuesto 6.25% segun el valor neto", () => {
    expect(valor_impuesto(6.25, 100)).toEqual(6.25);
  });
  it("para el codigo de estado 'AL' deberia devolver el impuesto 4.00% segun el valor neto", () => {
    expect(valor_impuesto(4.00, 100)).toEqual(4.00);
  });
  it("para el codigo de estado 'CA' deberia devolver el impuesto 4.00% segun el valor neto", () => {
    expect(valor_impuesto(8.25, 100)).toEqual(8.25);
  });
});

