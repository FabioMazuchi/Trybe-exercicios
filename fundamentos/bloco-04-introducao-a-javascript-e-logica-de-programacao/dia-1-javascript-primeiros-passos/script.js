/////// EXERCÍCIO 01 ////////
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


/////// EXERCÍCIO 02 ////////
// const n1 = 10;
// const n2 = 9;

// if(n1 > n2)
//  console.log(n1);
// else
//  console.log(n2);
// 


/////// EXERCÍCIO 03 ////////
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


/////// EXERCÍCIO 04 ////////
// const valor = -7;

// if(valor < 0)
//   console.log('negative');
// else
//   console.log('positive');


/////// EXERCÍCIO 05 ////////
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


/////// EXERCÍCIO 06 ////////
// let peca = 'tore';
// let pecaLower = peca.toLocaleLowerCase();

// switch (pecaLower) {
//   case 'peao':
//     console.log('para frente');
//     break;
//   case 'torre':
//     console.log('horizontal e vertical');
//     break;
//   case 'bispo':
//     console.log('diagonal');
//     break;
//   case 'cavalo':
//     console.log('em L');
//     break;
//   case 'rainha':
//     console.log('todas as direções')
//     break;
//   case 'rei':
//     console.log('vertical e horizontal');
//     break;          
//   default:
//     console.log('Inválido, não existe esta peça :(');  
// }


/////// EXERCÍCIO 07 ////////
// let nota = -1;

// if(nota < 0 || nota > 100) {
//   console.log('Erro, valor inválido :(');
// }else{
//   if(nota >= 90) {
//     console.log('A');
//   }else if(nota >= 80) {
//     console.log('B');
//   }else if(nota >= 70) {
//     console.log('C');
//   }else if(nota >= 60) {
//     console.log('D');
//   }else if(nota >= 50) {
//     console.log('E');
//   }else{
//     console.log('F');
//   }
// }


/////// EXERCÍCIO 08 ////////
// const n1 = 3;
// const n2 = 4;
// const n3 = 3;

// if(n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) 
//   console.log(true);
// else
//   console.log(false);


/////// EXERCÍCIO 09 ////////
// const n1 = 4;
// const n2 = 4;
// const n3 = 7;

// if(n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1) 
//   console.log(true);
// else
//   console.log(false);


/////// EXERCÍCIO 10 ////////

const custoProduto = 0;
const valoVenda = -2;

let valorCustoTotal = custoProduto + (0.2 * custoProduto);
let lucroVenda = valoVenda - valorCustoTotal
let lucroPorMil = lucroVenda * 1000;

if(custoProduto < 0 || valoVenda < 0) 
  console.log('Erro, valor negativo não é permitido :(')
else
  console.log('Lucro total ao vender 1000: '+lucroPorMil);


