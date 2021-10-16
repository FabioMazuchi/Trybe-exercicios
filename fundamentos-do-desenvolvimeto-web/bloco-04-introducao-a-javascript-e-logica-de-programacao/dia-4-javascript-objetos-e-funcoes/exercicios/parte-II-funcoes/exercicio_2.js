/*

2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

- Array de teste: [2, 3, 6, 7, 10, 1]; .

- Valor esperado no retorno da função: 4 .

*/

console.log(maior([2, 3, 6, 7, 10, 1]))

function maior(array) {
	let maior = array[0];
	let posicao = array[0];

	for (let i = 0; i < array.length; i++) {
		if (array[i] > maior) {
			maior = array[i];
			posicao = i;
		}
	}
	return posicao;
}

