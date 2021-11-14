const hydrate = (string) => {
  let soma = 0;
  let resultado = "";

  for (let s of string) {
    if (
      s === "1" ||
      s === "2" ||
      s === "3" ||
      s === "4" ||
      s === "5" ||
      s === "6" ||
      s === "7" ||
      s === "8" ||
      s === "9"
    ) {
      soma += Number(s);
    }
  }
  if (soma > 1) {
    resultado = `${soma} copos de água`;
  } else {
    resultado = `${soma} copo de água`;
  }
  return resultado;
};

module.exports = hydrate;
