import { get_costo_envio } from "./costo_envio.js";

describe("Calcular el costo de envio", () => {
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(0)).toEqual(0);
  });
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(10, 10)).toEqual(0);
  });
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(10, 12)).toEqual(35);
  });
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(10, 25)).toEqual(50);
  });
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(10, 50)).toEqual(60);
  });
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(10, 88)).toEqual(65);
  });
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(10, 144)).toEqual(80);
  });
  it("deberia calcular el costo de envio segun peso volumetrico", () => {
    expect(get_costo_envio(10, 202)).toEqual(90);
  });
});