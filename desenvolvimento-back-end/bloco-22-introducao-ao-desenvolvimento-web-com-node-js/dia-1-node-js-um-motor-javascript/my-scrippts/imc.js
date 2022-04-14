const readline = require('readline-sync');

const calculaImc = () => {
	const peso = readline.questionFloat('Qual seu peso?');
	const altura = readline.questionInt('Qual sua altura?');

	console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

	console.log(`IMC: ${imc}`);

	if (imc < 18.5) {
		console.log('Abaixo do peso (magreza)');
	}
	if (imc >= 18.5 && imc < 25) {
		console.log('Peso normal');
	}
	if (imc >= 25 && imc < 30) {
		console.log('Acima do peso (sobrepeso)');
	}
	if (imc >= 30 && imc < 35) {
		console.log('Obesidade grau I');
	}
	if (imc >= 35 && imc < 40) {
		console.log('Obesidade grau II');
	}
	
	console.log('Obesidade grau III e IV');
	
}

module.exports = calculaImc;