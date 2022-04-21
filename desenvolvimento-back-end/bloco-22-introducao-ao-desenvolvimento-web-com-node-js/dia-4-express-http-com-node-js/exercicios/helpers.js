const fs = require('fs').promises;

const getSimpons = () => {
	return fs.readFile('./simpsons.json', 'utf-8')
		.then(res => JSON.parse(res))
};

const setSimpsons = (simpsons) => {
	return fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
};

module.exports = { getSimpons, setSimpsons };