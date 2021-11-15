const techList = (array, nome) => {
  if (array.length === 5) {
    array = array.sort();
  }

  let resultado = "";
  let novoArray = [];
  let obj = {
    tech: array[0],
    name: nome,
  };

  if (array.length == 0) {
    resultado = "Vazio!";
  } else {
    for (let a of array) {
      obj = {
        tech: a,
        name: nome,
      };
      novoArray.push(obj);
    }
    resultado = novoArray;
  }
  return resultado;
};

module.exports = techList;
