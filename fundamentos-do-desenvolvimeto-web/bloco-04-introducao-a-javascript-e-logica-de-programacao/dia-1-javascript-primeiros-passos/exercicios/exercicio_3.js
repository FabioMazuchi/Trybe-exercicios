/*

Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

*/

const n1 = 43;
const n2 = 34;
const n3 = 133;

if(n1 > n2 && n1 > n3) {
 console.log(n1);
}else if(n2 > n1 && n2 > n3){
 console.log(n2)
}else{
 console.log(n3);
}