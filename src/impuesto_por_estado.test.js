import impuesto from "./impuesto_por_estado.js";

describe("Impuesto por estado", () => {
  it("para el codigo de estado UT deberia devolver el porcentaje 6.65%", () => {
    expect(impuesto("UT")).toEqual(6.65);
  });
});