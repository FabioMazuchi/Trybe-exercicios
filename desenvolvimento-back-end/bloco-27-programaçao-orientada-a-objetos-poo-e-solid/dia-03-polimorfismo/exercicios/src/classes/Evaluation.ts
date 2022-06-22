import { Teacher } from "./Teacher"

export abstract class Evaluation {
	private _teacher: Teacher;

	constructor(private _score: number, teacher: Teacher) {
		this.score = _score;
		this._teacher = teacher;
	}

	public get score(): number {
		return this._score
	}

	public set score(value: number) {
		if (value < 0) throw new Error('A pontução deve ser positiva.');

		this._score = value
	}

	public get teacher(): Teacher {
		return this._teacher
	}

	public set teacher(value: Teacher) {
		this._teacher = value
	}
}