/*
4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

- Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

- Valor esperado no retorno da função: Fernanda.

*/

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maiorNome(array) {
	let nome = array[0];
	let maior = array[0].length;

	for (let i = 0; i < array.length; i++) {
		if (array[i].length > maior) {
			maior = array[i].length;
			nome = array[i];
		}
	}
	return nome;
}