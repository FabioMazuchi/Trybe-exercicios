const encode = require("../js/encode");

describe("Testes relativos a função encode", () => {
  it("Verifica se encode é uma função", () => {
		expect(typeof encode).toBe('function');
	});
	it('Verifica se ao passar como parâmetro a string aeiou retorne 12345', () => {
		expect(encode('aeiou')).toBe('12345');
	});
	it('Verifica se ao passar como parâmetro a string "Fabio" retorne "F1b34"', () => {
		expect(encode('Fabio')).toBe('F1b34');
	});
	it('Verifica se o tamanho da string retornada é o mesmo dda string passada como parâmetro', () => {
		expect(encode('Fabio').length).toEqual(5);
	});
});
