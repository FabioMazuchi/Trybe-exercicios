const fs = require('fs').promises;

const addPersonagem = async () => {
	file = './simpsonFamily.json';
	res = await fs.readFile(file, 'utf-8')
		.then(arrayRes => JSON.parse(arrayRes));
	
	res.push({ id: '5', name: 'Nelson Muntz' });	
	
	fs.writeFile(file, JSON.stringify(res));
	
		console.log(res);
};

addPersonagem();
