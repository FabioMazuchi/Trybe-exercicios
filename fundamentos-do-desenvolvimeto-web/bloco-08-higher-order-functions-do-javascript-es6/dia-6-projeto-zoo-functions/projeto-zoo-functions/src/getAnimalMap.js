const data = require("../data/zoo_data");
// TODO

const getAnimals = () => {
  const res = {};
  const local = ["NE", "NW", "SE", "SW"];
  local.forEach((value) => {
    res[value] = data.species
      .filter((especie) => especie.location === value)
      .map((animal) => animal.name);
  });
  return res;
};

// console.log(getAnimals());

const getArrayNomes = (especie) => {
  return data.species.filter((specie) => specie.name === especie).map((animal) => animal.residents)[0].reduce((acc, resident) => {
    acc.push(resident.name);
    return acc;
  }, []);
};

const nomesAnimais = (func) =>  {
  const keys = Object.keys(func());
  const values = Object.values(func());
  const res = {};
  keys.forEach((value) => {
    values.forEach((val, i) => {
      res[value] = [{}];
    });
  });
  return res;
}

console.log(nomesAnimais(getAnimals));

function getAnimalMap(options) {
  const { sex, sorted, includNames } = options;
  return getAnimals();
}

// console.log(getAnimalMap({sex: 'female', sorted: true}));

module.exports = getAnimalMap;
