import { Cliente } from "./classes/Cliente";
import { Data } from "./classes/Data";
import { Estudante } from "./classes/Estudente";
import { Item } from "./classes/Item";
import { Pedido } from "./classes/Pedido";

console.log('\n========== ESCOLA =============');
const estudante = new Estudante('Fábio', '12', [1,2,3,8], [6,7]);
const media = estudante.mediaNotas();
console.log(`Aluno(a) ${estudante.nome} tem a média ${media}`);


console.log('\n========== RESTAURANTE =============');
const cliente = new Cliente('Fábio');
const item1 = new Item('Batata-frita', 5);
const item2 = new Item('X-Burger', 5);
const item3 = new Item('Refrigerante', 2.5);
const items = [item1, item2, item3];
const pedido = new Pedido(cliente, items, 'crédito', 0.1);

console.log(`Total: R$${pedido.total()}`);
console.log(`Total com desconto de ${pedido.desconto}%: R$${pedido.totalDesconto()}`);

console.log('\n========== DATA =============');
const data = new Data(2, 1, 1997);

console.log(data);
console.log(`Dia: ${data.dia}`);
console.log(`Mês: ${data.mes}`);
console.log(`Mês por extenso: ${data.getMonthName()}`);
console.log(`Ano: ${data.ano}`);
console.log(`O ano é bissexto? ${data.isLeapYear() ? 'Sim' : 'Não'}`);
console.log(data.format('dd/mm/aaaa'));
console.log(data.format('dd-mm-aaaa'));
console.log(data.format('aaaa/mm/dd'));
console.log(data.format('aaaa-mm-dd'));
console.log(data.format('dd de M de aa'));
console.log(data.format('dd, M de aa'));

const outraData = new Data(2, 1, 1996);
const comparado = data.compare(outraData);
const indexCompare = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${indexCompare[comparado + 1]} a segunda data.`);

const invalidDate = new Data(31, 13, 2021);

console.log(`Teste data inválida: `,invalidDate);
console.log(invalidDate.format('a m d'));






