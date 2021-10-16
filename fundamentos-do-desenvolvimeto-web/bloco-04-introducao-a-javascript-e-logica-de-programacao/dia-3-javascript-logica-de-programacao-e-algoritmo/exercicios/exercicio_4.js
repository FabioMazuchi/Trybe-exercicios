/*

4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

	*
 ***
*****

*/

let n = 5;
let string = '*';
let linha = '';
let meioMatriz = (n + 1) / 2;
let controleEsq = meioMatriz;
let controleDir = meioMatriz;

for (let i = 0; i <= meioMatriz; i++) {
	for (let coluna = 0; coluna <= n; coluna++) {
		if (coluna > controleEsq && coluna < controleDir) {
			linha += string;
		} else {
			linha += ' ';
		}
	}
	console.log(linha);
	linha = '';
	controleEsq--;
	controleDir++;
}