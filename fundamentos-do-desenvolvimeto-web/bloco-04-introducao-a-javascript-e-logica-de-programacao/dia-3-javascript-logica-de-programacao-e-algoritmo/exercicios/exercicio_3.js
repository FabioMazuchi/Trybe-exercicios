/*

3- Agora inverta o lado do triângulo. Por exemplo:

	n = 5

			*
		 **
		***
	 ****
	*****

*/

let n = 5;
let string = '*';
let linha = '';
let posicao = n;

for (let i = 0; i < n; i++) {
	for (let coluna = 0; coluna <= n; coluna++) {
		if (coluna < posicao) {
			linha += ' ';
		} else {
			linha += string;
		}
	}
	console.log(linha);
	linha = '';
	posicao -= 1;
}
