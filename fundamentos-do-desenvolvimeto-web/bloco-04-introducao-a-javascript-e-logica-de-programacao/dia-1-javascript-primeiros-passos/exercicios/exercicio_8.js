/*

Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

- Bonus: use somente um if .

*/

const n1 = 3;
const n2 = 4;
const n3 = 3;

if(n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) 
  console.log(true);
else
	console.log(false);
