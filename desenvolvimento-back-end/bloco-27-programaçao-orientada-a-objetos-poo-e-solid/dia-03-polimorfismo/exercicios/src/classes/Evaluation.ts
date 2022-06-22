import { Teacher } from "./Teacher"

export class Evaluation {
	private _teacher: Teacher;

	constructor(private _score: number, teacher: Teacher, private _type: string) {
		this.score = _score;
		this._teacher = teacher;
		this.type = _type;
	}

	public get score(): number {
		return this._score
	}

	public set score(value: number) {
		if (value < 0) throw new Error('A pontução deve ser positiva.');

		if (this.type === 'prova' && value > 25) {
			throw new Error('A pontução deve ser menor que 25 pontos.');
		}

		if (this.type === 'trabalho' && value > 50) {
			throw new Error('A pontução deve ser menor que 50 pontos.');
		}
		this._score = value
	}

	public get teacher(): Teacher {
		return this._teacher
	}

	public set teacher(value: Teacher) {
		this._teacher = value
	}

	public get type(): string {
		return this._type
	}

	public set type(value: string) {
		if (!['prova', 'trabalho'].includes(value)) throw new Error('O tipo de avaliação não é válido.');
		this._type = value
	}
}