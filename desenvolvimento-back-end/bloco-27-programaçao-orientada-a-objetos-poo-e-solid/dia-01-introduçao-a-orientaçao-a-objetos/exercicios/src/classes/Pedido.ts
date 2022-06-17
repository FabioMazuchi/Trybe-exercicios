import { Cliente } from "./Cliente";
import { Item } from "./Item";

export class Pedido {
	cliente: Cliente;
	itens: Item[];
	desconto: number;

	constructor(cliente: Cliente, itens: Item[], desconto: number) {
		this.cliente = cliente;
		this.itens = itens;
		this.desconto = desconto;
	}

	private soma(acc: number, preco: number): number { return acc + preco }

	total(): number {
		const arrayPreco = this.itens.map(item => item.preco);
		const soma = arrayPreco.reduce(this.soma);
		
		return soma
	}

	totalDesconto(): number {
		const total = this.total();
		const totalDesconto = total- (total * this.desconto);

		return totalDesconto;
	}
}