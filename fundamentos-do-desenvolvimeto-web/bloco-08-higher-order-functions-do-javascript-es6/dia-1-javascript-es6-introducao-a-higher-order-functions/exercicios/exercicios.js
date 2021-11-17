const newEmployes = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Gerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
		id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
		id3: func('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
	return employees;
};

const pessoa = (nomeCompleto) => {
	const nome = nomeCompleto.split(' ').join('').toLowerCase();
	return { nome: nomeCompleto, email: `${nome}@trybe.com`};
};

console.log(newEmployes(pessoa));
