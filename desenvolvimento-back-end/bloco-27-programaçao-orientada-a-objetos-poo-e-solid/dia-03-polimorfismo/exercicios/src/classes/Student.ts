import { Enrollable } from "../interfaces";
import { EvaluationResult } from "./EvaluationResult";
import { Person } from "./Person";

export class Student extends Person implements Enrollable{
	private _enrollment: string = '';
	private _evaluationsResults: EvaluationResult[];
	
	constructor(name: string, birthDate: Date) {
		super(name, birthDate);
		this._enrollment = this.generateEnrollment();
		this._evaluationsResults = [];
	}

	public get enrollment(): string {
		return this._enrollment;
	}

	public set enrollment(value: string) {
		if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
		this._enrollment = value;
	}

	public get evaluationsResults(): EvaluationResult[] {
		return this._evaluationsResults;
	}

	public set evaluationsResults(value: EvaluationResult[]) {
		this._evaluationsResults = value;
	}

	somaNotas(): number {
		return [...this._evaluationsResults]
		.reduce((acc, note) => note.score + acc, 0);
	}

	mediaNotas(): number {
		const divisor = this._evaluationsResults.length; 
		const somaNotas = this.somaNotas();

		return Math.round(somaNotas / divisor);
	}

	generateEnrollment(): string {
    	const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    	return `STU${randomStr}`;
  }

	addEvaluationResult(value: EvaluationResult) {
		this._evaluationsResults.push(value);
	}
}