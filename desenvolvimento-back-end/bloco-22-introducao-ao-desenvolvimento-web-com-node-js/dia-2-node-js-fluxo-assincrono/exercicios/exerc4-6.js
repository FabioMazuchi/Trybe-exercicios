const fs = require('fs').promises;

const trocaPersonagem = async () => {
	file = './simpsonFamily.json';
	res = await fs.readFile(file, 'utf-8')
		.then(arrayRes => JSON.parse(arrayRes));
	
	filtro = res.filter(({ id }) => id !== '5');	
	filtro.push({ id: '5', name: 'Maggie Simpson' });
	
	fs.writeFile(file, JSON.stringify(filtro));
	
	console.log(filtro);
};

trocaPersonagem();
