import { Enrollable } from "../interfaces";
import { Person } from "./Person";

export class Employee extends Person implements Enrollable {
	private _admissionDate: Date;
	private _enrollment: string;

	constructor(name: string, birthDate: Date, private _salary: number) {
		super(name, birthDate)
		this.salary = _salary
		this._enrollment = this.generateEnrollment();
		this._admissionDate = new Date();
	}

	public get salary(): number {
		return this._salary;
	}

	public set salary(value: number) {
		if (value < 0) throw new Error('O salário não pode ser negativo.');
		this._salary = value;
	}

	public get admissionDate(): Date {
		return this._admissionDate;
	}

	public set admissionDate(value: Date) {
		if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data futura.');
		this._admissionDate = value;
	}

	public get enrollment(): string {
		return this._enrollment;
	}

	public set enrollment(value: string) {
		this._enrollment = value;
	}

	generateEnrollment(): string {
		const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `FUNC${randomStr}`;
	}
}