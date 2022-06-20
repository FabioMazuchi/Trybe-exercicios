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

console.log('\n========== DATE =============');
const data = new Data(2, 1, 1997);
console.log(data.getMonthName());
console.log(data.isLeapYear());

