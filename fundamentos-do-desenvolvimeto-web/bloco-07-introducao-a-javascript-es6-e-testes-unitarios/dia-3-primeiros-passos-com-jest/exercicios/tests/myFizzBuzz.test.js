const myFizzBuzz = require("../js/myFizzBuzz");

describe("Testes relativos a função myFizzBuzz", () => {
	it('Verifica se ao passar como parâmetros o valor 15 retorne fizzbuzz', () => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
	});
	it('Verifica se ao passar como parêmetro o valor 9 o retorne fizz', () => {
		expect(myFizzBuzz(9)).toBe('fizz');
	});
	it('Verifica se ao passar como parametro o valor 25 retorne buzz', () => {
		expect(myFizzBuzz(25)).toBe('buzz');
	});
	it('Verifica se ao passar como parâmtro o valor 4 retorne 4', () => {
		expect(myFizzBuzz(4)).toBe(4);
	});
	it("verifica se ao passar como parâmetro o valor '5' retorne false", () => {
		expect(myFizzBuzz('5')).toBe(false);
	});
});
