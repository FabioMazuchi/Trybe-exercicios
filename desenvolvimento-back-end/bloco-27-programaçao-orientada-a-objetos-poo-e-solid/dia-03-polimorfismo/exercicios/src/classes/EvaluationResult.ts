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
	
	public set score(value: number) {
		if (value < 0) throw new Error('A pontução deve ser positiva.');
		this._score = value
	}
}