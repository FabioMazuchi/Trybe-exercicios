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

calculator(1, 2, 2)
  .then((res) => console.log(res))
  .catch((e) => console.log(e.message));
