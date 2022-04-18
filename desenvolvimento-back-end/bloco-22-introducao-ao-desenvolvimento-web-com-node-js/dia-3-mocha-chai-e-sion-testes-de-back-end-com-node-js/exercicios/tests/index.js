const { expect } = require("chai");
const readFile = require("../readFile");
const verifyNumbers = require("../verifyNumbers");
const sinon = require('sinon');
const fs = require('fs');

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

	describe('Quando o parâmetro não for um número', () => {
		it('retorna uma "string"', () => {
			const resposta = verifyNumbers('0');
			expect(resposta).to.be.a('string');
		});

		it('retorna "o valor deve ser um número"', () => {
			const resposta = verifyNumbers('0');
			expect(resposta).to.be.eq('o valor deve ser um número');
		});
	});
});

describe('Testa a função "readFile"', () => {
	const content = 'Fábio Turma 17!';

	before(() => {
		sinon.stub(fs, 'writeFileSync');
	});

	after(() => {
		fs.writeFileSync.restore();
	});
	
	it('retorna uma "string"', () => {
		const resposta = readFile('arquivo.txt', content);
		expect(resposta).to.be.a('string');
	});

	it('retorna "ok" após concluir a ascrita', () => {
		const resposta = readFile('arquivo.txt', content);
		expect(resposta).to.be.eq('ok');
	});
});