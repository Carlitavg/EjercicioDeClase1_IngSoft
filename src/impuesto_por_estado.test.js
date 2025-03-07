import impuesto from "./impuesto_por_estado.js";

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
});
