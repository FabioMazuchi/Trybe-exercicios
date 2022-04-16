fs = require("fs").promises;

const filtraSimpsons = async () => {
  file = './simpsons.json';
	simpsons = await fs
    .readFile(file)
    .then((contenArray) => JSON.parse(contenArray));

	filtroArray = simpsons.filter(({ id }) => id !== '6' && id !== '10');	

	await fs.writeFile(file, JSON.stringify(filtroArray));
};

filtraSimpsons();
