import readline from 'readline-sync';

function exec(arr: Array<string>, func:Function) {
	const value = readline.questionFloat('Digite o valor a ser convertido: ');
	const base = readline.keyInSelect(arr, 'Escolha a unidade base: ');
	const conversao = readline.keyInSelect(arr, 'Escolha a unidade de conversão: ')
	
	const fromUnitChoice = arr[base];
	const toUnitChoice = arr[conversao];

	const result = func(value, fromUnitChoice, toUnitChoice);
	const msg = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

	console.log(msg);
}

export default exec;