import totalizar from "./totalizar.js";

describe("Totalizar", () => {
  it("deberia Multiplicar dos numeros", () => {
    expect(totalizar(3, 2)).toEqual(6);
  });
});