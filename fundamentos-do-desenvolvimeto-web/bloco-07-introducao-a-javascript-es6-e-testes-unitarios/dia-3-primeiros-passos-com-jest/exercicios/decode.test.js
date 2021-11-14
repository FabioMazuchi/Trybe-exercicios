const decode = require("./decode");

describe("Testes relativos a função decode", () => {
  it("Verifica se decode é uma função", () => {
    expect(typeof decode).toBe('function');
  });
  it('Verifica se ao passar como parâmetro a string "12345" reorne "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Verifica se ao passar como parâmetro a string "F1b34" retorne "Fabio"', () => {
    expect(decode('F1b34')).toBe('Fabio');
  });
  it('Verifica se o tamanho da string retornada é o mesmo da string passada como parâmetro', () => {
    expect(decode('F1b34').length).toEqual(5);
  });
});
