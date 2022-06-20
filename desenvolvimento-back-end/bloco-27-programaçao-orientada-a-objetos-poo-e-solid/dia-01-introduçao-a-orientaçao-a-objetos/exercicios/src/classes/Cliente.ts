export class Cliente {
	private _nome: string = String();
	
	constructor(nome: string) {
		this.nome = nome 
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		if (value.length < 3) throw new Error('O nome do cliente deve conter no mínimo 3 caracteres.')
		this._nome = value;
	}
}