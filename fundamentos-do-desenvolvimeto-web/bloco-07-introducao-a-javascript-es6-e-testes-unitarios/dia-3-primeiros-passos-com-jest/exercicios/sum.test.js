const { expect } = require("@jest/globals");
const sum = require("./sum");

describe("Teste da função sum", () => {
  it("Verifica se (4, 5) retorna 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("Verifica se (0, 0) retorna 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Dispara um erro se o parâmetro for uma string", () => {
    expect(() => sum(4, '5')).toThrowError();
		expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
