import { get_impuesto_por_categoria } from "./impuesto_por_categoria";

describe("Impuesto por categoria de producto", () => {
  it("para la categoria de producto alimentos se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Alimentos")).toEqual(0);
  });
  it("para la categoria de producto bebidas alcolicas se aplica 7% de impuesto", () => {
    expect(get_impuesto_por_categoria("Bebidas alcohólicas")).toEqual(7);
  });
});