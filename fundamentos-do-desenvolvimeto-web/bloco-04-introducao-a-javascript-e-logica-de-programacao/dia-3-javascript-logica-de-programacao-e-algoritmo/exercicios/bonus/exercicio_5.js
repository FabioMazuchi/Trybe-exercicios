/*

5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

- Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

n = 7
							  
	 *                             
	* *                            
 *   *                           
*******

*/

let n = 9;
let meio = (n + 1) / 2;
let controlL = meio;
let controlR = meio;
let string = '*';
for (let l = 1; l <= meio; l += 1) {
	let resultado = '';
	for (let c = 1; c <= n; c += 1) {
		if (c == controlL || c == controlR || l == meio) {
			resultado += string;
		} else {
			resultado += ' ';
		}
	}
	controlL -= 1;
	controlR += 1;
	console.log(resultado);
}