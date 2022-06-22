import { Evaluation } from "./Evaluation"

export class EvaluationResult {
	private _evaluation: Evaluation

	constructor(evaluation: Evaluation, private _score: number) {
		this._evaluation = evaluation;
		this.score = _score;
	}

	public get evaluation(): Evaluation {
		return this._evaluation
	}

	public set evaluation(value: Evaluation) {
		this._evaluation = value
	}

	public get score(): number {
		return this._score
	}

	validateValueThreshold(value: number, type: string, threshold: number) {
		if (this._evaluation.type === type && value > threshold) {
			throw new Error(`A pontução deve ser menor que ${threshold} pontos.`);
		}
	}
	
	public set score(value: number) {
		if (value < 0) throw new Error('A pontução deve ser positiva.');
		this.validateValueThreshold(value, 'prova', 25);
		this.validateValueThreshold(value, 'trabalho', 50);
		this._score = value
	}
}