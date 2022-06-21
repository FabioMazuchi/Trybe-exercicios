export class Subject {
	constructor(private _nome: string) {
		this.nome = _nome;
	}

	public get nome(): string {
		return this._nome
	}

	public set nome(value: string) {
		if (value.length < 3) throw new Error('O nome tem que ter no mínimo 3 caracteres.')
		this._nome = value
	}
}