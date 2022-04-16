const fs = require('fs').promises;
const readline = require('readline');

const question = (msg) => {
	rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	
	return new Promise((resolve) => {
		rl.question(msg, (resp) => {
			rl.close();
			resolve(resp);
		});
	});
};

const main = async () => {
	fileName = await question('Qual o caminho do arquivo? ');

	try {
		contentFile = await fs.readFile(fileName, 'utf-8');

		console.log(contentFile);
	} catch (e) {
		console.log('Arquivo não existe');
	}
};

main();
