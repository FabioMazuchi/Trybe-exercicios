/*

7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

- Valor de teste: 'trybe' e 'be'

- Valor esperado no retorno da função: true

- verificaFimPalavra('trybe', 'be');

- Retorno esperado: true

- verificaFimPalavra('joaofernando', 'fernan');

- Retorno esperado: false

*/

console.log(verificafimPalavra('trybe', 'be'));
console.log(verificafimPalavra('joaofernando', 'fernan'));
console.log(verificafimPalavra('Maria', 'Maria de Souza'));

function verificafimPalavra(palavra, finalPalavra) {
	let tamanhoPalavra = palavra.length;
	let tamanhoFinalPalavra = finalPalavra.length;
	let reverseFinal = '';
	let final = '';
	let resultado;

	if (tamanhoFinalPalavra > tamanhoPalavra) {
		resultado = 'Erro, final é maior do que a palavra :(';
	} else {
		for (let i = 1; i <= tamanhoFinalPalavra; i++) {
			reverseFinal += palavra[tamanhoPalavra - i];
		}

		for (let k = tamanhoFinalPalavra - 1; k >= 0; k--) {
			final += reverseFinal[k]
		}

		if (finalPalavra == final) {
			resultado = true;
		} else {
			resultado = false;
		}
	}
	return resultado;
}