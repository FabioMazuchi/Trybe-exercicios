import { OrderItem } from "./OrderItem";
import { Person } from "./Person";

export class Order {
	private _client: Person;
	private _items: OrderItem[] = [];
	private _discount = 0;
	
	constructor(client: Person, items: OrderItem[], private _paymentMethod: string, discount?: number) {
		this._client = client;
		this.items = items;
		this.paymentMethod = _paymentMethod;

		if (discount) this.discount = discount;
	}
	
	public get paymentMethod(): string {
		return this._paymentMethod;
	}

	public set paymentMethod(value: string) {
		if (!['dinheiro', 'catão', 'vale'].includes(value)) {
			throw new Error('Forma de pagamento inválida.');
		}
		this._paymentMethod = value;
	}

	public get discount(): number {
		return this._discount;
	}

	public set discount(value: number) {
		if (value < 0) throw new Error('O desconto não pode ser um valor negativo.');
		this._discount = value;
	}

	public get items(): OrderItem[] {
		return this._items;
	}

	public set items(value: OrderItem[]) {
		if (value.length === 0) throw new Error('O pedido deve ter pelo meno um item.');
		this._items = value;
	}

	public get client(): Person {
		return this._client;
	}

	public set client(value: Person) {
		this._client = value;
	}

	calculateTotal(): number {
		return this.items.reduce((acc, item) => acc + item.price, 0);
	}

	calculateTotaoDiscount(): number {
		return this.calculateTotal() * (1 - this.discount)
	}
}