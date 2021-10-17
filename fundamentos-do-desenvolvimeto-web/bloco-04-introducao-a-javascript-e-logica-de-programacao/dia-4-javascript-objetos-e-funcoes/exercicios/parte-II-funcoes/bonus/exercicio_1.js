/*
1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

Dicas:

- Uma string é um array de caracteres, então cada elemento do array é uma letra.

- O valor de cada numeral romano é:

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |

- Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

- Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

*/
// console.log(convertRomanos('q'));

// // function convertRomanos(string) {
// // 	let algarismo = string.toLocaleUpperCase();
// // 	let resultado;

// // 	switch(algarismo) {
// // 		case 'I':
// // 			resultado = 1;
// // 			break;
// // 		case 'II':
// // 			resultado = 2;
// // 			break;
// // 		case 'III':
// // 			resultado = 3;
// // 			break;
// // 		case 'V':
// // 			resultado = 5;
// // 			break;	
// // 		case 'X':
// // 			resultado = 10;
// // 			break;
// // 		case 'L':
// // 			resultado = 50;
// // 			break;
// // 		case 'C':
// // 			resultado = 100;
// // 			break;
// // 		case 'D':
// // 			resultado = 500;
// // 			break;
// // 		case 'M':
// // 			resultado = 1000;
// // 			break;
// // 		default:
// // 			resultado = 'Valor inválido :(';				
// // 	}

// // 	if(resultado === 'Valor inválido :('){
// // 		return 'Errrrrouuuuu';	
// // 	}else{

// // 	}

// // }

let algarismos = {
	i: 1,
	ii: 2,
	iii: 3,
	v: 5,
	x: 10,
	l: 50,
	c: 100,
	d: 500,
	m: 1000
}

console.log(convert('v'));

function convert(string) {
	let resultado;
	for (let al in algarismos) {
		if(string !== al){
			resultado = algarismos[al];
		}else{

		}
	}
	return resultado;
}

