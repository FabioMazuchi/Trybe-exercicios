const fs = require('fs').promises;

const lerSimpsonJson = async () => {
	origem = './simpsons.json';
	destino = './simpsonFamily.json';
	res = await fs.readFile(origem, 'utf-8')
		.then(arrayRes => JSON.parse(arrayRes));
	
	filterArray = res.filter(({ id }) => id >= 1 && id <= 4);	

	fs.writeFile(destino, JSON.stringify(filterArray));
	
		console.log(filterArray);
};

lerSimpsonJson();