import { Cliente } from "./Cliente";
import { Item } from "./Item";

export class Pedido {
	private _cliente: Cliente;
	private _itens: Item[] = [];
	private _metodoPagamento: string;
	private _desconto: number = 0;

	constructor(cliente: Cliente, itens: Item[], metodoPagamento: string, desconto: number) {
		this._cliente = cliente;
		this.itens = itens;
		this._metodoPagamento = metodoPagamento;
		this.desconto = desconto;
	}

	public get cliente(): Cliente {
		return this._cliente;
	}

	public set cliente(value: Cliente) {
		this._cliente = value;
	}

	public get itens(): Item[] {
		return this._itens;
	}

	public set itens(value: Item[]) {
		if (value.length === 0) throw new Error('O pedido deve ter pelo meno um item.')
		this._itens = value;
	}

	public get metodoPagamento(): string {
		return this._metodoPagamento;
	}

	public set metodoPagamento(value: string) {
		this._metodoPagamento = value;
	}

	public get desconto(): number {
		return this._desconto;
	}

	public set desconto(value: number) {
		if (value < 0) throw new Error('O desconto não pode ser um valor negatívo.')
		this._desconto = value;
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