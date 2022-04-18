const { expect } = require("chai");
const verifyNumbers = require("../verifyNumbers");

describe('Testa a função "verifyNumbers"', () => {
	describe('Quando o parâmetro for um número positivo', () => {
		it('retorna uma "string"', () => {
			const resposta = verifyNumbers(1);
			expect(resposta).to.be.a('string');
		});
		it('retorna "positivo"', () => {
			const resposta = verifyNumbers(1);
			expect(resposta).to.be.eq('positivo');
		});
	});

	describe('Quando o parâmetro for um número negativo', () => {
		it('retorna uma "string"', () => {
			const resposta = verifyNumbers(-1);
			expect(resposta).to.be.a('string');
		});
		it('retorna "negativo"', () => {
			const resposta = verifyNumbers(-1);
			expect(resposta).to.be.eq('negativo');
		});
	});

	describe('Quando o parâmetro for 0', () => {
		it('retorna uma "string"', () => {
			const resposta = verifyNumbers(0);
			expect(resposta).to.be.a('string');
		});
		it('retorna "neutro"', () => {
			const resposta = verifyNumbers(0);
			expect(resposta).to.be.eq('neutro');
		});
	});
});