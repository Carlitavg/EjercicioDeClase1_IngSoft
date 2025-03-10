import {get_impuesto} from "./impuesto_por_estado.js";
import { get_valor_tasa } from "./totalizar.js";

describe("Impuesto por estado", () => {
  it("para el codigo de estado UT deberia devolver el porcentaje 6.65%", () => {
    expect(get_impuesto("UT")).toEqual(6.65);
  });
  it("para el codigo de estado 'NV' deberia devolver el porcentaje 8.00%", () => {
    expect(get_impuesto("NV")).toEqual(8.00);
  });
  it("para el codigo de estado 'TX' deberia devolver el porcentaje 6.25%", () => {
    expect(get_impuesto("TX")).toEqual(6.25);
  });
  it("para el codigo de estado 'AL' deberia devolver el porcentaje 4.00%", () => {
    expect(get_impuesto("AL")).toEqual(4.00);
  });
  it("para el codigo de estado 'CA' deberia devolver el porcentaje 8.25%", () => {
    expect(get_impuesto("CA")).toEqual(8.25);
  });
  it("para el codigo de estado 'UT' deberia devolver el impuesto 6.65% segun el valor neto", () => {
    expect(get_valor_tasa(6.65, 120)).toEqual(7.98);
  });
  it("para el codigo de estado 'NV' deberia devolver el impuesto 8.00% segun el valor neto", () => {
    expect(get_valor_tasa(8.00, 100)).toEqual(8.00);
  });
  it("para el codigo de estado 'TX' deberia devolver el impuesto 6.25% segun el valor neto", () => {
    expect(get_valor_tasa(6.25, 100)).toEqual(6.25);
  });
  it("para el codigo de estado 'AL' deberia devolver el impuesto 4.00% segun el valor neto", () => {
    expect(get_valor_tasa(4.00, 100)).toEqual(4.00);
  });
  it("para el codigo de estado 'CA' deberia devolver el impuesto 4.00% segun el valor neto", () => {
    expect(get_valor_tasa(8.25, 100)).toEqual(8.25);
  });
});

