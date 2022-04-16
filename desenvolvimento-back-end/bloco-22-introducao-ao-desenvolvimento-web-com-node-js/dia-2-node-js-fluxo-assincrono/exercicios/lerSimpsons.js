fs = require("fs").promises;

const getSimpsonById = async (id) => {
  arraySimpons = await fs.readFile("./simpsons.json", "utf-8")
    .then((conteudo) => JSON.parse(conteudo))
  
  const verifySimpson = arraySimpons.find(simpson => simpson.id ===  id.toString());  

  if (!verifySimpson) {
    throw new Error('id não encontrado');
  }

  return verifySimpson;
};

