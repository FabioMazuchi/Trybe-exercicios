export class Estudante {
	private _nome: string;
	private _matricula: string;
	private _notasProva: number[] = Array();
	private _notasTrabalho: number[] = Array();

	constructor(nome: string, matricula: string, notasProva: number[], notasTrabalho: number[]) {
		this._nome = nome;
		this._matricula = matricula;
		this.notasProva = notasProva;
		this.notasTrabalho = notasTrabalho;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public get matricula(): string {
		return this._matricula;
	}

	public set matricula(value: string) {
		this._matricula = value;
	}

	public get notasProva(): number[] {
		return this._notasProva;
	}

	public set notasProva(value: number[]) {
		if (value.length !== 4) throw new Error('É preciso ter 4 notas de prova.')
		this._notasProva = value;
	}

	public get notasTrabalho(): number[] {
		return this._notasTrabalho;
	}

	public set notasTrabalho(value: number[]) {
			if (value.length !== 2) throw new Error('É preciso ter 2 notas de trabalho.')
		this._notasTrabalho = value;
	}

	private soma(acc: number, nota: number): number { return acc + nota }

	somaNotas(): number {
		const arrayNotas = [...this.notasProva, ...this._notasTrabalho];
		return arrayNotas.reduce(this.soma);
	}

	mediaNotas(): number {
		const somaNotas = this.somaNotas();
		const divisor = this._notasProva.length + this._notasTrabalho.length; 

		return somaNotas / divisor;
	}
}