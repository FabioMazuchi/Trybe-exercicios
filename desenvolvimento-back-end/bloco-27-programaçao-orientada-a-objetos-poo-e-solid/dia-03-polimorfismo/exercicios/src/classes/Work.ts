import { Evaluation } from "./Evaluation";
import { Teacher } from "./Teacher";

export class Work extends Evaluation {
	constructor(teacher: Teacher, score: number) {
		super(score, teacher)
	}

	set score(value: number) {
		if (value > 50) throw new Error('A pontução deve ser menor que 50 pontos.');
		super.score = value;
	}
}