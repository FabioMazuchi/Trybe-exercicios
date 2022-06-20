export class Item {
	private _nome: string = String();
	private _preco: number = Number();

	constructor(nome: string, preco: number) {
		this.nome = nome;
		this.preco = preco;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		if (value.length < 3) throw new Error('O nome do item deve conter no mínimo 3 caracteres.')
		this._nome = value;
	}

	public get preco(): number {
		return this._preco;
	}

	public set preco(value: number) {
		if (value < 0) throw new Error('O preço deve ser positivo.')
		this._preco = value;
	}
}