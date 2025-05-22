import calcularCadena from "./calculadoraCadenas.js";

describe("Calculadora de cadenas", () => {
  it("Debería retornar 0 cuando la cadena está vacía", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Debería retornar 3 para una cadena con un solo número", () => {
    expect(calcularCadena("3")).toEqual(3);
  });
  it("Debería devolver 5 porque la cadena contiene dos elementos", () => {
    expect(calcularCadena("3,2")).toEqual(5);
  });
  it("Deberia retornar 10 porque la cadena contiene tres elementos", () => {
    expect(calcularCadena("3,2,5")).toEqual(10);
  });
  it("Deberia retornar 17 porque la cadena contiene cuatro elementos", () => {
    expect(calcularCadena("3-2,5-7")).toEqual(17);
  });
  it("Deberia retornar 26 tomando en cuenta el separador del usuario", () => {
    expect(calcularCadena("//[;] 3-2,5-7;9")).toEqual(26);
  });
  it("Deberia retornar 26 porque se ignoran los numeros mayores a 1000", () => {
    expect(calcularCadena("//[;] 3-2,1001,5-1001-7;9")).toEqual(26);
  });
});