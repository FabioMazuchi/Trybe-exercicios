// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// const a = 13;
// const b = 7;

// Adição
// let adicao = a + b;
// console.log(adicao);

// Subtração
// let subtracao = a - b;
// console.log(subtracao);

// Multiplicação
// let multiplicacao = a * b;
// console.log(multiplicacao);

// Divisão
// let divisao = a / b;
// console.log(divisao);

// Módulo
// let modulo = a % b;
// console.log(modulo);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const n1 = 10;
// const n2 = 9;

// if(n1 > n2)
//  console.log(n1);
// else
//  console.log(n2);
// 

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const n1 = 43;
// const n2 = 34;
// const n3 = 133;

// if(n1 > n2 && n1 > n3) {
//  console.log(n1);
// }else if(n2 > n1 && n2 > n3){
//  console.log(n2)
// }else{
//  console.log(n3);
// }

// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const valor = -7;

// if(valor < 0)
//   console.log('negative');
// else
//   console.log('positive');

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// NOTA: a soma dos angulos internos é sempre 180°

// const a = 60;
// const b = 60;
// const c = 60;

// if(a > 180 || b > 180 || c > 180 || a < 0 || b < 0 || c < 0) {
//   console.log('Erro, ângulo inválido :(');
// }else{
//   if(a + b + c <= 180) {
//     console.log(true);
//   }else{
//     console.log(false);
//   } 
// }

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = 'torre';
let pecaLower = peca.toLocaleLowerCase();

switch (pecaLower) {
  case 'peao':
    console.log('para frente');
    break;
  case 'torre':
    console.log('horizontal e vertical');
    break;
  case 'bispo':
    console.log('diagonal');
    break;
  case 'cavalo':
    console.log('em L');
    break;
  case 'rainha':
    console.log('todas as direções')
    break;
  case 'rei':
    console.log('vertical e horizontal');
    break;          
  default:
    console.log('Inválido');  
}
