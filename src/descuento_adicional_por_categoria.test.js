import get_descuento_por_categoria from "./descuento_adicional_por_categoria";

describe("Descuento adicional por categoria de producto", () => {
  it("para la categoria de producto alimentos se aplica 2% de descuento", () => {
    expect(get_descuento_por_categoria("Alimentos")).toEqual(2);
  });
  it("para la categoria de producto bebidas alcolicas se aplica 0% de descuento", () => {
    expect(get_descuento_por_categoria("Bebidas alcohólicas")).toEqual(0);
  });
  it("para la categoria de producto Material de escritorio se aplica 1.5% de descuento", () => {
    expect(get_descuento_por_categoria("Material de escritorio")).toEqual(1.5);
  });
  it("para la categoria de producto Muebles se aplica 0% de descuento", () => {
    expect(get_descuento_por_categoria("Muebles")).toEqual(0);
  });
  it("para la categoria de producto Electrónicos se aplica 1% de descuento", () => {
    expect(get_descuento_por_categoria("Electrónicos")).toEqual(1);
  });
  it("para la categoria de producto Vestimenta se aplica 0% de descuento", () => {
    expect(get_descuento_por_categoria("Vestimenta")).toEqual(0);
  });

});
