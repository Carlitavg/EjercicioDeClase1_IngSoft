import { get_impuesto_por_categoria } from "./impuesto_por_categoria";

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
  it("para la categoria de producto alimentos se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Muebles")).toEqual(3);
  });
  it("para la categoria de producto bebidas alcolicas se aplica 7% de impuesto", () => {
    expect(get_impuesto_por_categoria("Electrónicos")).toEqual(4);
  });
  it("para la categoria de producto material de escritorio se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Vestimenta")).toEqual(2);
  });
  it("para la categoria de producto material de escritorio se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Varios")).toEqual(0);
  });
});


