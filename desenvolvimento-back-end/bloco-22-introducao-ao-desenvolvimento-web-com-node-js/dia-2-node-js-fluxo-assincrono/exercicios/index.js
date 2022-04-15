const calculator = (n1, n2, n3) => {
  const promisse = new Promise((resolve, reject) => {
    if (
      typeof n1 !== "number" ||
      typeof n2 !== "number" ||
      typeof n3 !== "number"
    ) reject(new Error("Informe apenas números"));

    const res = (n1 + n2) * n3;

		if (res < 50) reject(new Error('Valor muito baixo'))
    resolve(res);
  });
  return promisse;
};

n1 = Math.floor(Math.random() * 100 + 1);
n2 = Math.floor(Math.random() * 100 + 1);
n3 = Math.floor(Math.random() * 100 + 1);

// calculator(n1, n2, n3)
//   .then((res) => console.log(`Resultado: ${res}`))
//   .catch((e) => console.log(e.message));

const calcular = async () => {
	n1 = Math.floor(Math.random() * 100 + 1);
	n2 = Math.floor(Math.random() * 100 + 1);	
	n3 = Math.floor(Math.random() * 100 + 1);
	
	const res = await calculator(n1, n2, n3);

	console.log(`Resultado: ${res}`);
}	

calcular();

	
