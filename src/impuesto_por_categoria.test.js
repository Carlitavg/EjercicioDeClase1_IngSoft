import { get_impuesto_por_categoria, get_valor_impuesto_por_categoria } from "./impuesto_por_categoria";

describe("Impuesto por categoria de producto", () => {
  it("para la categoria de producto alimentos se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Alimentos")).toEqual(0);
  });
  it("para la categoria de producto bebidas alcolicas se aplica 7% de impuesto", () => {
    expect(get_impuesto_por_categoria("Bebidas alcohólicas")).toEqual(7);
  });
  it("para la categoria de producto material de escritorio se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Material de escritorio")).toEqual(0);
  });
  it("para la categoria de producto muebles se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Muebles")).toEqual(3);
  });
  it("para la categoria de producto electronicos se aplica 7% de impuesto", () => {
    expect(get_impuesto_por_categoria("Electrónicos")).toEqual(4);
  });
  it("para la categoria de producto vestimenta se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Vestimenta")).toEqual(2);
  });
  it("para la categoria de producto varios se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Varios")).toEqual(0);
  });

  it("para la categoria de producto alimentos retorna el valor de 0% segun el total de venta", () => {
    expect(get_valor_impuesto_por_categoria(0.00, 100)).toEqual(0.00);
  });
  it("para la categoria de producto bebidas alcolicas retorna el valor de 7% segun el total de venta", () => {
    expect(get_valor_impuesto_por_categoria(7.00, 100)).toEqual(7.00);
  });
  it("para la categoria de producto Material de escritorio retorna el valor de 0% segun el total de venta", () => {
    expect(get_valor_impuesto_por_categoria(0.00, 100)).toEqual(0.00);
  });
  it("para la categoria de producto muebles retorna el valor de 3% segun el total de venta", () => {
    expect(get_valor_impuesto_por_categoria(3.00, 100)).toEqual(3.00);
  });
  it("para la categoria de producto electronicos retorna el valor de 4% segun el total de venta", () => {
    expect(get_valor_impuesto_por_categoria(4.00, 100)).toEqual(4.00);
  });
  it("para la categoria de producto vestimenta retorna el valor de 2% segun el total de venta", () => {
    expect(get_valor_impuesto_por_categoria(2.00, 100)).toEqual(2.00);
  });
  it("para la categoria de producto varios retorna el valor de 0% segun el total de venta", () => {
    expect(get_valor_impuesto_por_categoria(0.00, 100)).toEqual(0.00);
  });
});


