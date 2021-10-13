/*

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contImpar = 0;

for (let number of numbers) {
  if (number % 2 == 1) {
    contImpar += 1;
  }
}

if (contImpar == 0)
  console.log('nenhum valor ímpar encontrado :(');
else
  console.log(contImpar);