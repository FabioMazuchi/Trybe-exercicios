/*

Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

- Exemplo: bishop (bispo) -> diagonals (diagonais)

*/

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
    console.log('Inválido, não existe esta peça :(');  
}