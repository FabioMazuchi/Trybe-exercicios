import { Order } from "./Order";
import { Person } from "./Person";

export class Orderrepository {
	private _orders: Order[] = [];

	addOrder(value: Order) {
		this._orders.push(value)
	}

	removeOrder(value: Order) {
		const index = this._orders.findIndex(order => order.id === value.id);
		this._orders.splice(index, 1);
	}

	listByClient(value: Person): Order[] {
		return this._orders.filter(order => order.client === value);
	}

	listBySortedValue(sort: string): Order[] {
		if (!['maior', 'menor'].includes(sort)) throw new Error('Valor de ordenação inválido.');
		
		if (sort === 'menor') {
			return this._orders.sort(
				(a, b) => {
					if (a.calculateTotaoDiscount() > b.calculateTotaoDiscount()) return 1;
					if (a.calculateTotaoDiscount() < b.calculateTotaoDiscount()) return -1;
					return 0;
				}
			)
		}

		return this._orders.sort(
			(a, b) => {
				if (a.calculateTotaoDiscount() > b.calculateTotaoDiscount()) return -1;
				if (a.calculateTotaoDiscount() < b.calculateTotaoDiscount()) return 1;
				return 0;
			}
		)
	}

	public get orders(): Order[] {
		return this._orders;
	}

	public set orders(value: Order[]) {
		this._orders = value;
	}
}