import { Person } from "./Person";

export class Student extends Person {
	private _enrollments: string = '';
	private _examGrades: number[] = [];
	private _worksGrades: number[] = [];
	
	constructor(name: string, birthDate: Date) {
		super(name, birthDate);
		this._enrollments = this.generateEnrollment();
	}

	public get enrollments(): string {
		return this._enrollments;
	}

	public set enrollments(value: string) {
		if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
		this._enrollments = value;
	}

	public get examGrades(): number[] {
		return this._examGrades;
	}

	public set examGrades(value: number[]) {
		if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
		this._examGrades = value;
	}

	public get worksGrades(): number[] {
		return this._worksGrades;
	}

	public set worksGrades(value: number[]) {
		if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
		this._worksGrades = value;
	}

	 generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}