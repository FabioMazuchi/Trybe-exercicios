export abstract class Person {
	constructor(private _name: string, private _birthDate: Date) {
		this.name = _name;
		this.birthDate = _birthDate;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this.validateName(value);
		this._name = value;
	}

	get birthDate(): Date {
		return this._birthDate;
	}

	set birthDate(value: Date) {
		this.validateBirthDate(value);
		this._birthDate = value;
	}

	static getAge(value: Date): number {
		const diff = Math.abs(new Date().getTime() - value.getTime());
		const yearsMs = 31_536_000_000;
		return Math.floor(diff / yearsMs);
	}

	private validateName(name: string) {
		if (name.length < 3) throw new Error('O nome deve ter no mínimo 3 caracteres.')
	}

	private validateBirthDate(value: Date) {
		if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data futura.');
		if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
	}
}