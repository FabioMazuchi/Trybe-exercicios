// // Exercício 01
// const testinScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//     console.log(ifScope);
//   }else {
//     let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testinScope(true);

// Exercício 02
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }  

// const arrayordenado = sortOddsAndEvens();

// console.log(`Exibindo os números ordenados de forma crescente: ${arrayordenado}`); 

// Exercício 2 bônus
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Èxibindo os núeros ordenados de forma crescente: ${oddsAndEvens.sort((a, b) => a - b)}`);