import readline from 'readline-sync';

const data = [
  { name: 'Converter comprimento', script: './length' },
	{ name: 'Converter massa', script: './mass' },
	{ name: 'Converter capacidade', script: './capacity' },
	{ name: 'Converter área', script: './area' },
	{ name: 'Converter volume', script: './volume' },
];

const namesData = data.map(d => d.name);
const escolha = readline.keyInSelect(namesData, 'Escolha o script de conversão:');

require(data[escolha].script);