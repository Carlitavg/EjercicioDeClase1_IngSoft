import { get_costo_envio } from "./costo_envio";

describe("Calcular el costo de envio", () => {
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(0)).toEqual(0);
  });
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(10)).toEqual(0);
  });
});