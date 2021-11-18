// EXEMPLO 01

// const sum = (n1, n2) => n1 + n2;

// console.log(sum(1,4));

// EXEMPLO 02
// const sayHello = () => 'Hello trybers!';
// const printGeeting = (callback) => console.log(callback());

// printGeeting(sayHello);

// EXEMPLO 03
// const sumFix = (amount) => {
//     return (num)=> amount + num;
// }

// const initialSum = sumFix(15);
// console.log(initialSum(3));

// EXEMPLO 04
// const repeat = (num, action) => {
//   for (let count = 0; count <= num; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// EXEMPLO 05
// const repeat = (num, action) => {
//   for (let count = 0; count <= num; count += 1) {
//     action(count);
//   }
// };

// repeat(7, (num) => {
// 	if (num % 2 === 0) {
// 		console.log(num, 'é par');
// 	}
// });

// EXEMPLO 06
// const repeat =  (num, action) => {
// 	for (let count = 0; count <= num; count += 1) {
// 		action(count);
// 	}
// };

// const ePar = (num) => {
// 	if (num % 2 === 0) {
// 		console.log(num, 'é par');
// 	}
// }

// const eImpar = (num) => {
// 	if (num % 2 !== 0) {
// 		console.log(num, 'é ímpar');
// 	}
// }

// repeat(5, ePar);
// repeat(5, eImpar);

// EXEMPLO 06
// const numberGenerator = () => Math.random() * 100;

// console.log(numberGenerator());

// EXEMPLO 07
// const sum = (n1, n2) => n1 + n2;
// const sub = (n1, n2) => n1 - n2;

// const calculator = (func) => func(10, 5);

// console.log(calculator(sum));
// console.log(calculator(sub));