const myRemove = require('../js/myRemove');

describe('Testes da funçao myRemove', () => {
	it('Verifica se ao passar como parâmetro os valores ([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
		expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
	});
	it('Verifica se ao passar como parâmetro os valores ([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
		expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
	});
	it('Verifica se ao passar como parâmetro os valores ([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
		expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
})