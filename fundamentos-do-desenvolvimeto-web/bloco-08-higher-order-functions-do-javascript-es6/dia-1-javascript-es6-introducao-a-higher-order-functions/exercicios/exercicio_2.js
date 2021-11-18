const verifyNumber = (n1, n2) => n1 === n2;

const resultSort = (n1, func) => {
  const aleatorio = Math.floor((Math.random() * 5) + 1);

  return func(n1, aleatorio) ? 'Lucky day, you won!' : 'Try again!';
}

console.log(resultSort(3, verifyNumber));
