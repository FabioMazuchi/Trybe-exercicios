/*

3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

- Array de teste: [2, 4, 6, 7, 10, 0, -3]; .

- Valor esperado no retorno da função: 6 .

*/

console.log(menor([2, 4, 6, 7, 10, 0, -3]));

function menor(array) {
	let menor = array[0];
	let posicao;

	for (let i = 0; i < array.length; i++) {
		if (array[i] < menor) {
			menor = array[i];
			posicao = i;
		}
	}
	return posicao;
}