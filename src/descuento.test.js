import {get_descuento} from "./descuento.js";
import { get_valor_tasa } from "./totalizar.js";

describe("Sumar", () => {
  it("deberia devolver 3% de descuento para montos iguales a 1000", () => {
    expect(get_descuento(1000)).toEqual(3);
  });
  it("deberia devolver 3% de descuento para montos mayores a 1000", () => {
    expect(get_descuento(2030)).toEqual(3);
  });
  it("deberia devolver 0% de descuento para montos menores a 1000", () => {
    expect(get_descuento(999)).toEqual(0);
    expect(get_descuento(10)).toEqual(0);
    expect(get_descuento(160)).toEqual(0);
  });
  it("deberia devolver 5% de descuento para montos iguales a 3000", () => {
    expect(get_descuento(3000)).toEqual(5);
  });
  it("deberia devolver 5% de descuento para montos iguales y mayores a 3000", () => {
    expect(get_descuento(3010)).toEqual(5);
    expect(get_descuento(3660)).toEqual(5);
  });
  it("deberia devolver 7% de descuento para montos iguales a 7000", () => {
    expect(get_descuento(7000)).toEqual(7);
  });
  it("deberia devolver 7% de descuento para montos iguales y mayores a 7000", () => {
    expect(get_descuento(7010)).toEqual(7);
    expect(get_descuento(7660)).toEqual(7);
  });
  it("deberia devolver 10% de descuento para montos iguales a 10000", () => {
    expect(get_descuento(10000)).toEqual(10);
  });
  it("deberia devolver 10% de descuento para montos iguales y mayores a 10000", () => {
    expect(get_descuento(10010)).toEqual(10);
    expect(get_descuento(10660)).toEqual(10);
  });
  it("deberia devolver 15% de descuento para montos iguales a 30000", () => {
    expect(get_descuento(30000)).toEqual(15);
  });
  it("deberia devolver 15% de descuento para montos iguales y mayores a 30000", () => {
    expect(get_descuento(30010)).toEqual(15);
    expect(get_descuento(30660)).toEqual(15);
    expect(get_descuento(100660)).toEqual(15);
  });
  it("deveria devolver el descuento del precio neto para valores q corresponda", () => {
    expect(get_valor_tasa(get_descuento(1100), 1100)).toEqual(33);
    expect(get_valor_tasa(get_descuento(10000), 10000)).toEqual(1000);
  });

});

