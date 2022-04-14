const readline = require('readline-sync');

const sorteio = () => {
	const num = readline.questionInt('Qual seu palpite?(0 a 10)')
	const aleatorio = parseInt(Math.random() * 10);

	if (num === aleatorio) {
		console.log('Parabéns, número correto!');
	} else {
		console.log(`Opa, não foi dessa vez. O número era ${aleatorio}`);
	}

	const jogar = readline.question('Deseja jogar novamente?(s/n)');

	if (jogar === 's') {
		sorteio()		
	} else {
		console.log('Fim de Jogo');
	}
}

module.exports = sorteio;
