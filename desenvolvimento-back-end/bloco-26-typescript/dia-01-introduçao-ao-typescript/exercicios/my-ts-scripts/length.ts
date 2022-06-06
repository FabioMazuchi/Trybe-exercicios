import readline from 'readline-sync';
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(value:number, fromUnit:string, toUnit:string):number {
	const fromIndex = units.indexOf(fromUnit);
	const toIndex = units.indexOf(toUnit);
	const expoent = (toIndex - fromIndex);
	
	return value * Math.pow(10, expoent);
} 

function exec() {
	const value = readline.questionFloat('Digite o valor a ser convertido: ');
	const base = readline.keyInSelect(units, 'Escolha a unidade base: ');
	const conversao = readline.keyInSelect(units, 'Escolha a unidade de conversão: ')
	
	const fromUnitChoice = units[base];
	const toUnitChoice = units[conversao];

	const result = convert(value, fromUnitChoice, toUnitChoice);
	const msg = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

	console.log(msg);
}

exec();