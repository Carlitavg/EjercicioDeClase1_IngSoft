import get_descuento_por_categoria from "./descuento_adicional_por_categoria";

describe("Descuento adicional por categoria de producto", () => {
  it("para la categoria de producto alimentos se aplica 2% de descuento", () => {
    expect(get_descuento_por_categoria("Alimentos")).toEqual(2);
  });
  
});
