/*
1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

- Exemplo de palíndromo: arara.

- verificaPalindrome('arara');

- Retorno esperado: true

- verificaPalindrome('desenvolvimento');

- Retorno esperado: false

*/

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));

function verificaPalindromo(palavra) {
	let reverse = '';
	let tamanho = palavra.length - 1;
	let resultado;

	for (let i = 0; i <= tamanho; i++) {
		reverse += palavra[tamanho - i];
		if (palavra == reverse) {
			resultado = true;
		} else {
			resultado = false;
		}
	}
	return resultado;
}





