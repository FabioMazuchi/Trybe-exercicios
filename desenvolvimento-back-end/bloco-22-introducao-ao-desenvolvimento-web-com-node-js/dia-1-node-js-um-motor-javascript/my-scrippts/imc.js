const readline = require('readline-sync');

const calculaImc = () => {
	const peso = readline.questionInt('Qual seu peso?');
	const altura = readline.questionInt('Qual sua altura?');

	console.log(`Peso: ${peso}, Altura: ${altura}`);

	const imc = (peso / (altura * altura)).toFixed(2);

	console.log(`IMC: ${imc}`);
}

calculaImc();