const fs = require('fs').promises;

const readFile = async (path) => {
	try {
		const content = await fs.readFile(path, 'utf-8');
		return JSON.parse(content);
	} catch (e) {
		console.log(e.message);
		return null;
	}
};

const writeFile = async (path, content) => {
	try {
		const array = await readFile(path);
		array.push(content);
		await fs.writeFile(path, JSON.stringify(array));
	} catch (e) {
		console.log(e.message);
		return null
	}
};

module.exports = { readFile, writeFile };