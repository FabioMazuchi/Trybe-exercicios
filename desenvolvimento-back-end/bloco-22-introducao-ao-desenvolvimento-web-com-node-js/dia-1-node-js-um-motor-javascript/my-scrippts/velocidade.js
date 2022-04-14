const readline = require('readline-sync');

const calcVelocidade = () => {
	const dist = readline.questionInt('Qual a distância?(m)');
	const tempo = readline.questionInt('Qual o tempo?(s)')
	
	const vM = (dist / tempo).toFixed(2);

	console.log(`Velocidade média: ${vM} m/s`);
}

module.exports = calcVelocidade;
