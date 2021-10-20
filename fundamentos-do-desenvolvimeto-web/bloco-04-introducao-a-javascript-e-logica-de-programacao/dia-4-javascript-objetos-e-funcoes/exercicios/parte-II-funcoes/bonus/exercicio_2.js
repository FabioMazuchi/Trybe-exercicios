/*

2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

*/

console.log(arrayOfNumbers([[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]]));

function arrayOfNumbers(array) {
	let pares = [];

	for (let a of array) {
		let separaVector = a
		for (let i = 0; i < separaVector.length; i++) {
			if (separaVector[i] % 2 == 0) {
				pares.push(separaVector[i]);
			}
		}
	}
	return pares;
}