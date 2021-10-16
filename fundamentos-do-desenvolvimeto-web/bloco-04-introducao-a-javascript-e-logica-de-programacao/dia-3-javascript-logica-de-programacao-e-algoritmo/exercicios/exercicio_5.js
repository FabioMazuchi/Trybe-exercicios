/*

5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

- Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

n = 7
                                 012*456
   *                             01* *56
  * *                            0*   *6
 *   *                           *******
*******

*/

let n = 5;
let string = '*';
let linha = '';
let meioMatriz = (n + 1) / 2;
let controleEsq = meioMatriz;       	//coluna: 0
let controleDir = meioMatriz;			//controleDir: 3	

console.log(meioMatriz);
for (let i = 0; i <= meioMatriz; i++) {
	for (let coluna = 0; coluna <= n; coluna++) {
		if (coluna > controleEsq && coluna < controleDir && coluna == controleEsq-coluna) {
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



