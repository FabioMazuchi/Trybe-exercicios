const fs = require('fs');

const readFile = (nameFile, content) => {
	fs.writeFileSync(nameFile, content);
	
	return 'ok';
};

module.exports = readFile;