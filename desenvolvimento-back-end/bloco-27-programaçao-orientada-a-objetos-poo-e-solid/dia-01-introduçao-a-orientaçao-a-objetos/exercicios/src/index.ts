import { Cliente } from "./classes/Cliente";
import { Data } from "./classes/Data";
import { Estudante } from "./classes/Estudente";
import { Item } from "./classes/Item";
import { Pedido } from "./classes/Pedido";
import { Notas } from "./interfaces";

const notasProva: Notas = { nota1: 8, nota2: 4 ,nota3: 3 , nota4: 6 } 
const notasTrabalho: Notas = { nota1: 8, nota2: 4 }

const est = new Estudante('Fábio', 12, notasProva, notasTrabalho);
const media = est.mediaNotas();
console.log(`Aluno(a) ${est.nome} tem a média ${media}`);

console.log('\n========== RESTAURANTE =============');
const cliente = new Cliente('Fábio');
const item1 = new Item('Batata-frita', 12);
const item2 = new Item('X-Burger', 23.5);
const item3 = new Item('Refrigerante', 8);
const items = [item1, item2, item3];
const pedido = new Pedido(cliente, items, 0.1);

console.log(`Total: R$${pedido.total()}`);
console.log(`Total com desconto de ${pedido.desconto}%: R$${pedido.totalDesconto()}`);

console.log('\n========== DATE =============');
const data = new Data('02', '03', '1901');
data.getMonthName();
