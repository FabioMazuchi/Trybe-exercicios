export class OrderItem {
	constructor(private _name: string, private _price: number) {
		this.name = _name;
		this.price = _price;
	}

	public get price(): number {
		return this._price
	}

	public set price(value: number) {
		if (value < 0) throw new Error('O preço não pode ser negativo')
		this._price = value
	}

	public get name(): string {
		return this._name
	}

	public set name(value: string) {
		if (value.length < 3) throw new Error('O nome tem que ter pelo menos 3 caracteres')
		this._name = value
	}
}