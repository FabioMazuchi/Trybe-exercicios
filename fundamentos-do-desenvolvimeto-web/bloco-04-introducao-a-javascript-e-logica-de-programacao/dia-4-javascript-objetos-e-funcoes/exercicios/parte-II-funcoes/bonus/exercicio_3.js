/*

3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

*/

const basket = [
	'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
	'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
	'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
	'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
	'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
	'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
	'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
	'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
	'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
	'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
	'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
	'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
	'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
	'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
	'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
	'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
	'Banana', 'Pera', 'Abacate', 'Uva',
];

let frutas = new Object();
let arrayFruta = [];
cont = 0;

for (let b of basket) {
	frutas[b] = '';
}

for (let f in frutas) {
	arrayFruta.push(f);
}

for (let ar of arrayFruta) {
	for (let i = 0; i < basket.length; i++) {
		if (ar == basket[i]) {
			cont += 1;
		}
	}
	frutas[ar] = cont;
	cont = 0;
}

console.log(frutas);
