const fs = require('fs').promises;
const readline = require('readline-sync');

const question = (msg) => {
	return new Promise((resolve) => {
		resp = readline.question(msg);
		resolve(resp)
	})
};

const main = async () => {
	fileName = await question('Qual o nome do arquivo? ');

	try {
		const conteudoArquivo = await fs.readFile(fileName, 'utf-8');
		
		palavra = await question('Palavra que deseja substituir: ');
		novaPalavra = await question('Nova palavra: ');
		
		res = conteudoArquivo.replace(new RegExp(palavra, 'g'), novaPalavra);
		
		console.log(res);
		
		destino = await question('Nome do arquivo de destino: ');

		fs.writeFile(destino, res);

	} catch (e) {
		console.log('arquivo não existe');
	}
};

main();
