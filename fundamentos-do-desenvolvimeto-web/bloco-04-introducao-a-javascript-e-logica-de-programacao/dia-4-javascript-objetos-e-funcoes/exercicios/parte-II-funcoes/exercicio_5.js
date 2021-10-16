/*

5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

- Array de teste: [2, 3, 2, 5, 8, 2, 3];.

- Valor esperado no retorno da função: 2.

*/

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));

function maisRepete(array) {
	let cont = 0;
	let maisRepete = 0;

	for (let i = 0; i < array.length; i++) {
		let compara = array[i];
		for (let n = 0; n < array.length; n++) {
			if (compara == array[n]) {
				cont++;
			}
		}
		if (cont > maisRepete) {
			maisRepete = array[i];
		}
		cont = 0;
	}
	return maisRepete;
}