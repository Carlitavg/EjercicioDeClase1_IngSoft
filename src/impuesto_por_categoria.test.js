import { get_impuesto_por_categoria } from "./impuesto_por_categoria";

describe("Impuesto por categoria de producto", () => {
  it("para la categoria de producto alimentos se aplica 0% de impuesto", () => {
    expect(get_impuesto_por_categoria("Alimentos")).toEqual(0);
  });
});