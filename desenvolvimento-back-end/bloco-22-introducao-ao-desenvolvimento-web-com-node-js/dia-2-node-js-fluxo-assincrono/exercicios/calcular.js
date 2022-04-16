const calculator = (n1, n2, n3) => {
  const promisse = new Promise((resolve, reject) => {
    if (
      typeof n1 !== "number" ||
      typeof n2 !== "number" ||
      typeof n3 !== "number"
    ) reject("Informe apenas números");

    const res = (n1 + n2) * n3;

		if (res < 50) reject('Valor muito baixo')
    resolve(res);
  });
  return promisse;
};

// calculator(8, 8, 8)
//   .then(res => console.log(`Resultado: ${res}`))
//   .catch(e => console.log(e));

// calculator(8, '8', 8)
// .then(res => console.log(`Resultado: ${res}`))
// .catch(e => console.log(e));  

// calculator(2, 2, 2)
// .then(res => console.log(`Resultado: ${res}`))
// .catch(e => console.log(e));  

const generatorRandomNum = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const calcular = async () => {
  // Não sabia doo Array.from, utilizei este exemplo do gabarito do course, pois reduziu a quantidade de linhas do meu código e ficou mais fácil de ler.
  numbersRandom = Array.from({ length: 3}).map(generatorRandomNum);

  try {
    const res = await calculator(...numbersRandom);
  
    console.log(`Resultado: ${res}`);
  } catch (e) {
    console.error(e);
  }
}
	
calcular();