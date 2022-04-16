const fs = require('fs').promises;

const arrayParaArquivo = async () => {
	strings = ['Finalmente', 'estou', 'usando', 'Promisse.all', '!!!'];

	criarPromisses = strings.map((str, i) => 
		fs.writeFile(`./file${i + 1}.txt`, str));

	await Promise.all(criarPromisses);

	fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt',]
	
	conteudoArquivos = await Promise.all(
		fileNames.map(file => fs.readFile(file, 'utf-8'))
	);

	novoConteudo = conteudoArquivos.join(' ');

	await fs.writeFile('.novoArquivo.txt', novoConteudo);
	console.log(novoConteudo);
};

arrayParaArquivo();