const numeroAleatorio = () => Math.floor(Math.random() * 100);

const toMaiusculas = (string) => string.toUpperCase();

const primeiraLetra = (string) => string[0];

const concatStrings = (strA, strB) => `${strA}${strB}`;

function callApi() {
   const API_URL = 'https://dog.ceo/api/breeds/image/random';
   return fetch(API_URL)
   .then(response => response.json())
   .then(response.ok ?  Promise.resolve(json) : Promise.reject(json));
}

console.log(callApi());


module.exports = {
  numeroAleatorio,
  toMaiusculas,
  primeiraLetra,
  concatStrings,
  callApi,
};
